import React from 'react'

import { Container, CopyrightBox } from './Main.styled.components'

import Toolbar from '../../components/Toolbar/Toolbar'
import Copyright from '../../components/Copyright/Copyright'

import { Query } from 'react-apollo'

import { GET_ATHLETES_BY_GAME } from '../../services/graphql/AthleteQueries'

import AthleteThumbnailCarousel from '../../components/AthleteThumbnailCarousel/AthleteThumbnailCarousel'

const Main = () => {
  return (
    <React.Fragment>
      <Toolbar />
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
