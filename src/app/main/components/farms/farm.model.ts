export class Farm {
  constructor(
    name?: string,
    fields?: [
      {
        type?: string;
        properties?: {
          idField?: string;
          name?: string;
        };
        geometry?: {
          type?: string;
          coordinates?: [[[0]]];
        };
      }
    ]
  ) {}
}
