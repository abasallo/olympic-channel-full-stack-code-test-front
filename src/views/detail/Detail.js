import React from 'react'

import { Container, CopyrightBox } from './Detail.styled.components'

import Toolbar from '../../components/Toolbar/Toolbar'
import Copyright from '../../components/Copyright/Copyright'

import { useParams } from 'react-router'

import { Query } from 'react-apollo'

import { GET_ATHLETE } from '../../services/graphql/AthleteQueries'

import AthleteDetail from '../../components/AthleteDetail/AthleteDetail'

import CircularProgress from '@material-ui/core/CircularProgress'

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
            return <AthleteDetail athlete={data.getAthlete} />
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
