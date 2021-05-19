export class DataSetEntriesAPI {
  constructor(
    public dslUid: string,
    public startDate: string,
    public endDate: string,
    public pldCode: string,
  ) {}
}
