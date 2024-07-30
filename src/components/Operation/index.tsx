import {
  h,
  FunctionComponent,
  VNode,
  Fragment,
} from 'preact'

import { Appearance } from '@typings/appearance'

import { Button, Link } from '@radix-ui/themes'

import {
  GitHubLogoIcon,
  HomeIcon,
  MoonIcon,
  ReloadIcon,
  SunIcon,
} from '@radix-ui/react-icons'

interface OperationIndexProps {
  appearance: Appearance
  changeAppearance: () => void
}

const OperationIndex: FunctionComponent<
  OperationIndexProps
> = ({ appearance, changeAppearance }): VNode => {
  function reloadWebpage(): void {
    // localStorage.setItem(
    //   'position',
    //   JSON.stringify({ offsetXRef.current, offsetYRef.current }),
    // )
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
      <Link href="/">
        <Button size="2" variant="surface">
          <HomeIcon />
        </Button>
      </Link>
      <Link
        href="https://github.com/hj5230"
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
