import {
  RESTfulService,
  SocketService,
  Uploader,
} from '@services/.'

const baseURL = 'http://localhost:3000'

export class ServiceFactory {
  static createRESTfulService(): RESTfulService {
    return new RESTfulService(baseURL)
  }

  static createSocketService(): SocketService {
    return new SocketService(baseURL)
  }

  static createUploader(): Uploader {
    return new Uploader(baseURL)
  }
}
