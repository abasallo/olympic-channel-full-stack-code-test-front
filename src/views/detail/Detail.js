import React from 'react'

import { Container, CopyrightBox } from './Detail.styled.components'

import Toolbar from '../../components/Toolbar/Toolbar'
import Copyright from '../../components/Copyright/Copyright'

import { useParams } from 'react-router'

import { Query } from 'react-apollo'

import { GET_ATHLETE } from '../../services/graphql/AthleteQueries'

import AthleteDetail from '../../components/AthleteDetail/AthleteDetail'

import CircularProgress from '@material-ui/core/CircularProgress'

import Typography from '@material-ui/core/Typography'

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
            const result = []
            result.push(<Typography variant="h2" component="h3">{`${data.getAthlete.name} ${data.getAthlete.surname} details`}</Typography>)
            result.push(<AthleteDetail athlete={data.getAthlete} />)
            return result
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
