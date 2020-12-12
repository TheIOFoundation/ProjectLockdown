import express from 'express';
import { connect } from './repositories';
import SnapshotsService from './services/SnapshotsService';
import CacheService from './services/CacheService';
import cors from 'cors';
import compression from 'compression';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { MessagesService } from './services/MessagesService';

const swaggerDocument = YAML.load('./api.yaml');

const app = express();

app.use(cors())
app.use(compression());

const ttl = 60 * 60 * 1;
const cacheService = new CacheService(ttl);

connect().then(database => {

    const snapshotService = new SnapshotsService(database);
    if (process.env.AZURE_SERVICEBUS_CONNECTION_STRING && process.env.AZURE_SERVICEBUS_CACHE_QUEUE) {
        var cacheMessageBus = new MessagesService(process.env.AZURE_SERVICEBUS_CONNECTION_STRING, process.env.AZURE_SERVICEBUS_CACHE_QUEUE);
        cacheMessageBus.addReceiver(message => {
            cacheService.flush();
        });
    }

    app.listen(process.env.PORT || 3000, function () {
        console.log(`listening on ${process.env.PORT || 3000}`)
    });

    app.get('/status/world/:date/', function (req, res, next) {
        let date = new Date(req.params.date);

        cacheService.get(`status_world_${date}}`, () => {
            return snapshotService.getWorldLockdownSnaphots(date);
        }).then(result => {
            res.json(result);
        }).catch(next);
    });

    app.get('/status/world/:startDate/:endDate', function (req, res, next) {
        let startDate = new Date(req.params.startDate);
        let endDate = new Date(req.params.endDate);

        cacheService.get(`status_world_${startDate}${endDate}}`, () => {
            return snapshotService.getWorldLockdownSnaphotsByRange(startDate, endDate);
        }).then(result => {
            res.json(result);
        }).catch(next);
    });

    app.get('/status/:iso/:date', function (req, res, next) {
        let iso = req.params.iso;
        let date = new Date(req.params.date);

        cacheService.get(`${iso}${date}`, () => {
            return snapshotService.getSnapshot(iso, date);
        }).then(result => {
            res.json(result);
        }).catch(next);
    });

    app.get('/status/:iso/:startDate/:endDate', function (req, res, next) {
        let iso = req.params.iso;
        let startDate = new Date(req.params.startDate);
        let endDate = new Date(req.params.endDate);

        cacheService.get(`${iso}${startDate}${endDate}`, () => {
            return snapshotService.getSnapshots(iso, startDate, endDate);
        }).then(result => {
            res.json(result);
        }).catch(next);
    });

    app.get('/measures/:iso/:startDate/:endDate', function (req, res, next) {
        let iso = req.params.iso;
        let startDate = new Date(req.params.startDate);
        let endDate = new Date(req.params.endDate);
        let measures = req.query.measures;

        cacheService.get(`${iso}${startDate}${endDate}${measures}`, () => {
            return snapshotService.getSnapshotsByMeasures(iso, startDate, endDate, measures);
        }).then(result => {
            res.json(result);
        }).catch(next);
    });


    app.get('/totals/lockdown/:startDate/:endDate', function (req, res, next) {
        let startDate = new Date(req.params.startDate);
        let endDate = new Date(req.params.endDate);

        cacheService.get(`totals_lockdown_${startDate}${endDate}`, () => {
            return snapshotService.getTotalsLockdown(startDate, endDate);
        }).then(result => {
            res.json(result);
        }).catch(next);
    });

    app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
});