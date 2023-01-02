import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './routes/Router'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import { UserContext } from './context/UserContext'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <UserContext>
          <Router />
        </UserContext>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}