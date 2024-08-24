import { h, FunctionComponent, VNode } from 'preact'

import { Heading } from '@themes/heading'
// import { Badge } from '@themes/badge'
// import { Flex } from '@themes/flex'
// import { Text } from '@themes/text'

// import { GlowPanel } from '@components/GlowPanel'
// import { Media } from '@components/Media'

// import project_definition from '@assets/definition.project'
// import { Typewriter } from '@components/TypeWriter'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

// TODO: move Container to app.tsx for all routes
const Project: FunctionComponent = (): VNode => {
  return (
    <div style={{ textAlign: 'center' }}>
      <ExclamationTriangleIcon width="48" height="48" />
      <br />
      <br />
      <Heading>页面建设中</Heading>
    </div>
  )

  // return (
  //   <Flex direction="column" gap="3">
  //     {project_definition.project.map(p => {
  //       const children = (
  //         <Flex direction="column">
  //           <Flex justify="between">
  //             <Heading>{p.name}</Heading>
  //             <Flex>
  //               {p.keywords &&
  //                 p.keywords.map(k => (
  //                   <Badge color={k.color}>{k.text}</Badge>
  //                 ))}
  //             </Flex>
  //             <Text as="p" color="gray" size="2">
  //               {p.period}
  //             </Text>
  //           </Flex>
  //           <Text>{p.description}</Text>
  //           <Media type="video" uri={p.media_uri} />
  //           <Typewriter text={p.comment} />
  //         </Flex>
  //       )

  //       if (p.themeColor) {
  //         return (
  //           <GlowPanel
  //             inputStyle={{
  //               border: `1px solid ${p.themeColor}`,
  //             }}
  //           >
  //             {children}
  //           </GlowPanel>
  //         )
  //       } else {
  //         return <GlowPanel>{children}</GlowPanel>
  //       }
  //     })}
  //   </Flex>
  // )
}

export default Project
