export interface IdResponseProps {
  id: string;
}

export class IdResponse {
  constructor(id: string) {
    this.id = id;
  }

  readonly id: string;
}
