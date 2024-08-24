import { AxiosRequestConfig } from 'axios'
import { UploaderMessageType } from '@typings/.'

export interface IRESTfulService {
  get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T>
  post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T>
  put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T>
  delete<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T>
  patch<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T>
}

export interface ISocketService {
  initialize(): Promise<void>
  terminate(): Promise<void>
  emit(event: string, data: unknown): void
  on(event: string, callback: (data: unknown) => void): void
}

export interface IUploader {
  info(type: UploaderMessageType, message: string[]): void
  warn(type: UploaderMessageType, message: string[]): void
  error(type: UploaderMessageType, message: string[]): void
}

export { RESTfulService } from '@services/RESTfulService'
export { SocketService } from '@services/SocketService'
export { Uploader } from '@services/upload'
export { DefinitionLoader } from '@services/definition'
export { ServiceFactory } from '@services/ServiceFactory'
