import axios, {
  AxiosInstance,
  AxiosRequestConfig,
} from 'axios'
import { IRESTfulService } from '@services/.'

export class RESTfulService implements IRESTfulService {
  protected axiosInstance: AxiosInstance

  constructor(
    baseURL: string,
    config?: AxiosRequestConfig,
  ) {
    this.axiosInstance = axios.create({
      baseURL: baseURL,
      ...config,
    })
  }

  async get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.axiosInstance.get<T>(
      url,
      config,
    )
    return response.data
  }

  async post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.axiosInstance.post<T>(
      url,
      data,
      config,
    )
    return response.data
  }

  async put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.axiosInstance.put<T>(
      url,
      data,
      config,
    )
    return response.data
  }

  async delete<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.axiosInstance.delete<T>(
      url,
      config,
    )
    return response.data
  }

  async patch<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.axiosInstance.patch<T>(
      url,
      data,
      config,
    )
    return response.data
  }
}
