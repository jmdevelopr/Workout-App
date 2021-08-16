export interface HttpResponse<T = unknown> {
  data: T;
  ok: boolean;
  status: number;
}

export interface ErrorResponse {
  status: number;
  message: string;
}

export interface DataInterface {
  key: string;
  value: string | string[];
}
