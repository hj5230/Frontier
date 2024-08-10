export enum RESTfulMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export enum ServiceType {
  GET_AVATAR = 0,
}

export interface RequestPayload {
  type: RESTfulMethod
  uri: string
  params?: Record<string, string>
  data?: Record<string, string>
}
