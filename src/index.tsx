import { h, render } from 'preact'
import App from './App'
import '@radix-ui/themes/styles.css'

const root = document.getElementById('root')
if (root) {
  render(<App />, root)
}
