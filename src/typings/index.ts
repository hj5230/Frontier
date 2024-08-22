import { VNode, JSX } from 'preact'

export type VirtDomNode = VNode | React.ReactNode

export type CSSProps =
  | JSX.CSSProperties
  | React.CSSProperties

export { Appearance } from '@typings/appearance'
export { Color } from '@typings/color'
export {
  Definition,
  NavbarDefinition,
  ResumeDefinition,
  ProjectDefinition,
  WorkDefinition,
  ContactDefinition,
} from '@typings/definition'
export { LangLevel } from '@typings/lang_level'
export { Language } from '@typings/language'
export { Position } from '@typings/position'
export {
  RESTfulMethod,
  ServiceType,
  RequestPayload,
} from '@typings/services'
export {
  UploaderMessageLevel,
  UploaderMessageType,
} from '@typings/uploader'
export { VisitorInfo } from '@typings/visitor_info'
