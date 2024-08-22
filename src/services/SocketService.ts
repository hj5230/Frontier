import io, { Socket } from 'socket.io-client'
import { ISocketService } from '@services/.'

export class SocketService implements ISocketService {
  private socket: Socket

  constructor(baseURL: string) {
    this.socket = io(baseURL)
  }

  async initialize(): Promise<void> {
    return new Promise(resolve => {
      this.socket.on('connect', () => {
        console.log('Socket connected')
        resolve()
      })
    })
  }

  async terminate(): Promise<void> {
    return new Promise(resolve => {
      this.socket.disconnect()
      this.socket.on('disconnect', () => {
        console.log('Socket disconnected')
        resolve()
      })
    })
  }

  emit(event: string, data: unknown): void {
    this.socket.emit(event, data)
  }

  on(
    event: string,
    callback: (data: unknown) => void,
  ): void {
    this.socket.on(event, callback)
  }
}
