import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { ApolloProvider } from 'react-apollo'
import { apolloClient } from './services/graphql/apolloClient'

import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { customMUITheme } from './customMUITheme'

import Main from './views/main/Main'
import Detail from './views/detail/Detail'

import constants from './modules/constants'

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <MuiThemeProvider theme={customMUITheme}>
        <StylesProvider injectFirst>
          <CssBaseline />
          <Router>
            <Switch>
              <Route path={constants.PATH_DETAIL}>
                <Detail />
              </Route>
              <Route path={constants.PATH_ROOT}>
                <Main />
              </Route>
            </Switch>
          </Router>
        </StylesProvider>
      </MuiThemeProvider>
    </ApolloProvider>
  )
}

export default App
