import { h, FunctionComponent, VNode } from 'preact'
import { useState } from 'preact/hooks'
import { Route, Router } from 'preact-router'

import { Appearance } from '@typings/appearance'

import { Theme, Separator } from '@radix-ui/themes'

import Draggable from '@components/Draggable'
import Navbar from '@components/Navbar'
import Panel from '@components/Panel'

import Home from '@routes/home'
import Resume from '@routes/resume'
import Project from '@routes/project'
import Contact from '@routes/contact'
import OperationIndex from '@components/Operation'

const App: FunctionComponent = (): VNode => {
  const [appearance, setAppearance] = useState(
    Appearance.DARK,
  )

  function changeAppearance() {
    setAppearance(
      appearance === Appearance.DARK
        ? Appearance.LIGHT
        : Appearance.DARK,
    )
  }

  return (
    <Theme
      appearance={appearance}
      accentColor="iris" // by defualt
      grayColor="sage"
      style={{ minHeight: 0 }}
    >
      <Draggable
        items={
          <OperationIndex
            appearance={appearance}
            changeAppearance={changeAppearance}
          />
        }
      />
      <Navbar />
      {/* separator color to be changed */}
      <Separator my="3" size="4" color="cyan" />
      <Panel
        inputStyle={{
          height: 'calc(100vh - 100px)',
        }}
      >
        <Router>
          <Route path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/project" component={Project} />
          <Route path="/contact" component={Contact} />
        </Router>
      </Panel>
    </Theme>
  )
}

export default App
