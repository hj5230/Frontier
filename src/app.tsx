import { h, VNode } from 'preact'
import { useState } from 'preact/hooks'
import { Route, Router } from 'preact-router'

import { Appearance } from '@interfaces/appearance'

import { Theme } from '@radix-ui/themes'

import DraggableHub from '@components/DraggableHub'
import Navbar from '@components/Navbar'

import Home from '@routes/home'
import Resume from '@routes/resume'

const App: React.FC = (): VNode => {
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
    <Theme appearance={appearance} style={{ minHeight: 0 }}>
      <DraggableHub />
      <Navbar
        appearance={appearance}
        changeAppearance={changeAppearance}
      />

      <Router>
        <Route path="/" component={Home} />
        <Route path="/resume" component={Resume} />
      </Router>
    </Theme>
  )
}

export default App
