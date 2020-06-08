import React from 'react'

import { Container, CopyrightBox } from './Main.styled.components'

import Toolbar from '../../components/Toolbar/Toolbar'
import Copyright from '../../components/Copyright/Copyright'

import { Query } from 'react-apollo'

import { GET_ATHLETES_BY_GAME } from '../../services/graphql/AthleteQueries'

import AthleteThumbnailCarousel from '../../components/AthleteThumbnailCarousel/AthleteThumbnailCarousel'

import CircularProgress from '@material-ui/core/CircularProgress'

import Typography from '@material-ui/core/Typography'

const Main = () => {
  return (
    <React.Fragment>
      <Toolbar />
      <Container>
        <Typography variant="h2" component="h3">
          Olympic Athletes
        </Typography>
        <Query query={GET_ATHLETES_BY_GAME}>
          {({ loading, error, data }) => {
            if (loading) return <CircularProgress />
            if (error) return `Error: ${error.message}`
            return <AthleteThumbnailCarousel athletesByGame={data.getAthletesByGame} />
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
