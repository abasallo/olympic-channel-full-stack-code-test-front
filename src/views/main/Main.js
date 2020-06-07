import React from 'react'

import Toolbar from '@material-ui/core/Toolbar'

import logo from '../../images/logo.png'

import { AppBar, Logo, Container, CopyrightBox } from './Main.styled.components'

import Copyright from '../../components/Copyright/Copyright'

import constants from '../../modules/constants'

import { Query } from 'react-apollo'

import { GET_ATHLETES_BY_GAME } from '../../services/graphql/AthleteQueries'

import AthleteThumbnailCarousel from '../../components/AthleteThumbnailCarousel/AthleteThumbnailCarousel'

const Main = () => {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Logo src={logo} alt={constants.LOGO_ALT} />
        </Toolbar>
      </AppBar>
      <Container>
        <Query query={GET_ATHLETES_BY_GAME}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...'
            if (error) return `Error: ${error.message}`
            return <AthleteThumbnailCarousel athletesByGames={data.getAthletesByGame} />
          }}
        </Query>
      </Container>
      <CopyrightBox mt={8}>
        <Copyright />
      </CopyrightBox>
    </React.Fragment>
  )
}

export default Main
