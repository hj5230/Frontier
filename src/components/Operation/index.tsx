import {
  h,
  FunctionComponent,
  VNode,
  Fragment,
} from 'preact'

import { Appearance } from '@typings/appearance'

import { Button } from '@themes/button'
import { Link } from '@themes/link'
import {
  HomeIcon,
  GitHubLogoIcon,
  SunIcon,
  MoonIcon,
  ReloadIcon,
} from '@radix-ui/react-icons'

import app_definition from '@assets/definition.app'
import definition from '@assets/definition.index'

interface OperationIndexProps {
  appearance: Appearance
  changeAppearance: () => void
}

const OperationIndex: FunctionComponent<
  OperationIndexProps
> = ({ appearance, changeAppearance }): VNode => {
  function reloadWebpage(): void {
    window.location.reload()
  }

  return (
    <Fragment>
      <Button
        onClick={reloadWebpage}
        size="2"
        variant="surface"
      >
        <ReloadIcon />
      </Button>
      <Link href={app_definition.path[0].path}>
        <Button size="2" variant="surface">
          <HomeIcon />
        </Button>
      </Link>
      <Link
        href={definition.github}
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
    </Fragment>
  )
}

export default OperationIndex
