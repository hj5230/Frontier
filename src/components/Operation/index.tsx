import {
  h,
  FunctionComponent,
  VNode,
  Fragment,
} from 'preact'

import { useDefinitions } from '@hooks/useDefinitions'

import { Appearance } from '@typings/appearance'
import { DefinitionModule } from '@typings/definition'

import { Button } from '@themes/button'
import { Link } from '@themes/link'
import { Flex } from '@themes/flex'
import { Skeleton } from '@themes/skeleton'

import {
  HomeIcon,
  GitHubLogoIcon,
  SunIcon,
  MoonIcon,
  ReloadIcon,
} from '@radix-ui/react-icons'

interface OperationIndexProps {
  appearance: Appearance
  changeAppearance: () => void
}

export const OperationIndex: FunctionComponent<
  OperationIndexProps
> = ({ appearance, changeAppearance }): VNode => {
  const [definitions, loading, error] = useDefinitions(
    DefinitionModule.APP,
    DefinitionModule.INDEX,
  )

  function reloadWebpage(): void {
    window.location.reload()
  }

  const layout = (content: VNode) => (
    <Flex gap="2">{content}</Flex>
  )

  if (loading) {
    return layout(
      <Fragment>
        {[1, 2, 3, 4].map((_, index) => (
          <Skeleton key={index}>
            <Button size="2" variant="surface" />
          </Skeleton>
        ))}
      </Fragment>,
    )
  }

  if (error) {
    return layout(<div>Error loading operation index</div>)
  }

  const { app, index } = definitions

  return layout(
    <Fragment>
      <Button
        onClick={reloadWebpage}
        size="2"
        variant="surface"
      >
        <ReloadIcon />
      </Button>
      <Link href={app.path[0].path}>
        <Button size="2" variant="surface">
          <HomeIcon />
        </Button>
      </Link>
      <Link
        href={index.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button size="2" variant="surface">
          <GitHubLogoIcon />
        </Button>
      </Link>
      <Button
        onClick={changeAppearance}
        size="2"
        variant="surface"
      >
        {appearance === Appearance.DARK && <MoonIcon />}
        {appearance === Appearance.LIGHT && <SunIcon />}
      </Button>
    </Fragment>,
  )
}
