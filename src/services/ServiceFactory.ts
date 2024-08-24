import {
  RESTfulService,
  SocketService,
  Uploader,
  DefinitionLoader,
} from '@services/.'

import {
  RESTfulBaseURL,
  SocketBaseURL,
  UploadURL,
  DefinitionsURL,
} from '@services/constants'

export class ServiceFactory {
  static createRESTfulService(): RESTfulService {
    return new RESTfulService(RESTfulBaseURL)
  }

  static createSocketService(): SocketService {
    return new SocketService(SocketBaseURL)
  }

  static createUploader(): Uploader {
    return new Uploader(UploadURL)
  }

  static createDefinitionLoader(): DefinitionLoader {
    return new DefinitionLoader(
      this.createRESTfulService(),
      DefinitionsURL,
    )
  }
}
