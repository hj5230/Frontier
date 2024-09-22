/**
 * @fileoverview This module contains type definitions and exports for various components.
 * @module typings
 * @status INACTIVE
 * @reason **NOT IN USE** due to unexpected warning in bundle (if modules imported from here)
 * @todo Investigate and resolve issues,
 * then apply all import ... from @typings/... to index
 */
import { VNode, JSX } from 'preact'

export type VirtDomNode = VNode | React.ReactNode

export type CSSProps =
  | JSX.CSSProperties
  | React.CSSProperties

export { Appearance } from '@typings/appearance'
export { Color, ColorSchema } from '@typings/color'
export {
  Definition,
  DefinitionSchema,
  ResumeDefinition,
  ResumeDefinitionSchema,
  ProjectDefinition,
  ProjectDefinitionSchema,
  WorkDefinition,
  WorkDefinitionSchema,
  ContactDefinition,
  ContactDefinitionSchema,
  NavbarDefinition,
  NavbarDefinitionSchema,
  AppDefinition,
  AppDefinitionSchema,
  DefinitionModule,
  // DefinitionModuleSchema,
} from '@typings/definition'
export {
  LangLevel,
  LangLevelSchema,
} from '@typings/lang_level'
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
export { definitionsUrl } from '@typings/constant'
