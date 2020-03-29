export class Jobs {                     
    constructor(
      public id: string,
      public company: string,
      public title: string,
      public description: string,
      public jobType: string,
      public location: string
    ) {}
  }