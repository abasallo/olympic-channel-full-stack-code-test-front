import React from 'react'

import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

import { Container, CopyrightBox } from './Main.styled.components'

import AthleteThumbnailCarousel from '../../components/AthleteThumbnailCarousel/AthleteThumbnailCarousel'
import Copyright from '../../components/Copyright/Copyright'
import Toolbar from '../../components/Toolbar/Toolbar'

import { Query } from 'react-apollo'

import { GET_ATHLETES_BY_GAME } from '../../graphql/AthleteQueries'

import constants from '../../modules/constants'

const Main = () => {
  return (
    <React.Fragment>
      <Toolbar />
      <Container>
        <Typography variant="h2" component="h3">
          {constants.MAIN_TITLE_TEXT}
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
