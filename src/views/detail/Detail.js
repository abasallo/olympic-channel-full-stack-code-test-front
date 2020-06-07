import React from 'react'

import Toolbar from '@material-ui/core/Toolbar'

import logo from '../../images/logo.png'

import { AppBar, Logo, Container, CopyrightBox } from './Detail.styled.components'

import Copyright from '../../components/Copyright/Copyright'

import constants from '../../modules/constants'

import { useParams } from 'react-router'

import { Query } from 'react-apollo'

import { GET_ATHLETE } from '../../services/graphql/AthleteQueries'

import AthleteDetail from '../../components/AthleteDetail/AthleteDetail'

const Detail = () => {
  const { id } = useParams()
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Logo src={logo} alt={constants.LOGO_ALT} />
        </Toolbar>
      </AppBar>
      <Container>
        <Query query={GET_ATHLETE} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...'
            if (error) return `Error! ${error.message}`
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
