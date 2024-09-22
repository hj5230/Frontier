import {
  h,
  FunctionComponent,
  VNode,
  Fragment,
} from 'preact'

import { useDefinitions } from '@hooks/useDefinitions'

import { DefinitionModule } from '@typings/definition'
import { LangLevel } from '@typings/lang_level'

import { Card } from '@themes/card'
import { Badge } from '@themes/badge'
import { Flex } from '@themes/flex'
import { Heading } from '@themes/heading'
import { Text } from '@themes/text'
import { Skeleton } from '@themes/skeleton'

import { GlobeIcon } from '@radix-ui/react-icons'

import { GlowPanel } from '@components/GlowPanel'

export const Language: FunctionComponent = (): VNode => {
  const [definitions, loading, error] = useDefinitions(
    DefinitionModule.INDEX,
    DefinitionModule.RESUME,
  )

  const layout = (content: VNode) => (
    <GlowPanel>{content}</GlowPanel>
  )

  if (loading) {
    return layout(
      <Fragment>
        <Flex justify="between" align="center" mb="4">
          <Skeleton>
            <Heading size="6">Loading...</Heading>
          </Skeleton>
        </Flex>
        <Flex direction="column" gap="3">
          {[1, 2, 3].map((_, index) => (
            <Skeleton key={index}>
              <Card style={{ height: '80px' }} />
            </Skeleton>
          ))}
        </Flex>
      </Fragment>,
    )
  }

  if (error) {
    return layout(
      <div>Error loading language information</div>,
    )
  }

  const { index, resume } = definitions

  const getBadgeColor = (level: LangLevel) => {
    switch (level) {
      case LangLevel.BASIC:
        return 'lime'
      case LangLevel.INTERMEDIATE:
        return 'amber'
      case LangLevel.ADVANCED:
        return 'orange'
      case LangLevel.NATIVE:
        return 'red'
      default:
        return 'gray'
    }
  }

  const getLangLevelText = (level: LangLevel) => {
    switch (level) {
      case LangLevel.BASIC:
        return index._langlevel.basic
      case LangLevel.INTERMEDIATE:
        return index._langlevel.intermediate
      case LangLevel.ADVANCED:
        return index._langlevel.advanced
      case LangLevel.NATIVE:
        return index._langlevel.native
      default:
        return ''
    }
  }

  return layout(
    <Fragment>
      <Flex justify="between" align="center" mb="4">
        <Heading size="6">
          <Flex align="center" gap="2">
            <GlobeIcon width="24" height="24" />
            {resume._language}
          </Flex>
        </Heading>
      </Flex>
      <Flex direction="column" gap="3">
        {resume.language.map(l => (
          <Card key={l.lang}>
            <Flex justify="between">
              <Heading size="4">{l.lang}</Heading>
              <Badge color={getBadgeColor(l.level)}>
                {getLangLevelText(l.level)}
              </Badge>
            </Flex>
            <Text>{l.comment}</Text>
          </Card>
        ))}
      </Flex>
    </Fragment>,
  )
}
