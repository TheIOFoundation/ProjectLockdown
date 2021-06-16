import { ServiceBusClient, ReceiveMode } from "@azure/service-bus";

export class MessagesService {
  constructor(connectionString, queueName) {
    this.sbClient = ServiceBusClient.createFromConnectionString(connectionString);
    this.queueClient = this.sbClient.createQueueClient(queueName);
    this.sender = this.queueClient.createSender();
    this.receiver = this.queueClient.createReceiver(ReceiveMode.receiveAndDelete);
  }

  async sendMessage(body, label, properties) {
    const message = {
      body: body,
      label: label,
      userProperties: properties
    };
    console.log(`Sending message: ${message.body}`);
    await this.sender.send(message);
  }

  addReceiver(onRecieve) {
    this.receiver.registerMessageHandler(
      (message) => {
        console.log("Received message");
        onRecieve(message);
      },
      (error) => {
        console.log(error);

      }
    );
  }

  async close() {
    await this.queueClient.close();
    await this.sbClient.close();
  }
}