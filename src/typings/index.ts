import { VNode, JSX } from 'preact'

export type VirtDomNode = VNode | React.ReactNode

export type CSSProps =
  | JSX.CSSProperties
  | React.CSSProperties
