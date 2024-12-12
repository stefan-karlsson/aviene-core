import { IdResponse } from '../IdResponse/id.response-dto.js';

export interface ResponseBaseProps {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export class ResponseBase extends IdResponse {
  constructor(props: ResponseBaseProps) {
    super(props.id);

    this.createdAt = new Date(props.createdAt).toISOString();
    this.updatedAt = new Date(props.updatedAt).toISOString();
  }

  readonly createdAt: string;

  readonly updatedAt: string;
}
