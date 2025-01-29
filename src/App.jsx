import { ThemeColorProvider } from './context/Theme'
import { CoreApp } from './core'

function App() {

  return (
    <>
      <ThemeColorProvider>
        <CoreApp />
      </ThemeColorProvider>
    </>
  )
}

export default App
