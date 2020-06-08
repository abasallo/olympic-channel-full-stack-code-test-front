import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'

import { Container, CopyrightBox } from './Detail.styled.components'

import AthleteDetail from '../../components/AthleteDetail/AthleteDetail'
import Copyright from '../../components/Copyright/Copyright'
import Toolbar from '../../components/Toolbar/Toolbar'

import { useParams } from 'react-router'

import { Query } from 'react-apollo'

import { GET_ATHLETE } from '../../graphql/AthleteQueries'

const Detail = () => {
  const { id } = useParams()
  return (
    <React.Fragment>
      <Toolbar />
      <Container>
        <Query query={GET_ATHLETE} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return <CircularProgress />
            if (error) return `Error: ${error.message}`
            return (
              <React.Fragment>
                <Typography variant="h2" component="h3">{`${data.getAthlete.name} ${data.getAthlete.surname} details`}</Typography>
                <AthleteDetail athlete={data.getAthlete} />
              </React.Fragment>
            )
          }}
        </Query>
      </Container>
      <CopyrightBox mt={8}>
        <Copyright />
      </CopyrightBox>
    </React.Fragment>
  )
}

export default Detail
