import { RESTfulService, IUploader } from '@services/.'
import {
  UploaderMessageLevel,
  UploaderMessageType,
} from '@typings/.'

export class Uploader implements IUploader {
  private restService: RESTfulService

  constructor(baseURL: string) {
    this.restService = new RESTfulService(baseURL)
  }

  info(type: UploaderMessageType, message: string[]): void {
    this.upload(UploaderMessageLevel.INFO, type, message)
  }

  warn(type: UploaderMessageType, message: string[]): void {
    this.upload(UploaderMessageLevel.WARN, type, message)
  }

  error(
    type: UploaderMessageType,
    message: string[],
  ): void {
    this.upload(UploaderMessageLevel.ERROR, type, message)
  }

  private upload(
    level: UploaderMessageLevel,
    type: UploaderMessageType,
    message: string[],
  ): void {
    this.restService
      .post('/log', {
        level,
        type,
        message: message.join('; '),
      })
      .catch(err => {
        console.error('Failed to upload log:', err)
      })
  }
}
