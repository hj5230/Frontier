import {
  h,
  FunctionComponent,
  VNode,
  Fragment,
} from 'preact'

interface MediaSize {
  width: string | number
  height: string | number
}

interface MediaProps {
  uri: string
  type: 'image' | 'video'
  size?: MediaSize
  inputStyle?: preact.JSX.CSSProperties
}

export const Media: FunctionComponent<MediaProps> = ({
  uri,
  type,
  size,
  inputStyle,
}): VNode => {
  let mediaStyle: preact.JSX.CSSProperties

  size
    ? (mediaStyle = {
        width: size.width,
        height: size.height,
        ...inputStyle,
      })
    : (mediaStyle = { ...inputStyle })

  const children = (
    <Fragment>
      {type === 'image' && <img src={uri} />}
      {type === 'video' && <video src={uri} controls />}
    </Fragment>
  )

  return <div style={mediaStyle}>{children}</div>
}
