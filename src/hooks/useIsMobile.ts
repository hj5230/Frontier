import { ServiceFactory } from '@services/ServiceFactory'
import {
  UploaderMessageType,
  VisitorInfo,
} from '@typings/.'

export function useIsMobile(): boolean {
  try {
    const visitorInfo = JSON.parse(
      localStorage.getItem('visitorInfo'),
    ) as VisitorInfo
    return visitorInfo.userAgent.device.type === 'mobile'
  } catch (e) {
    console.error(
      `[useIsMobile] Caught error when trying to parse visitor info: ${e}`,
    )

    ServiceFactory.createUploader().error(
      UploaderMessageType.PARSER_VISITOR_INFO_ERROR,
      [
        arguments.callee.name,
        'Caught error when trying to parse visitor info',
        e,
      ],
    )
    return false
  }
}
