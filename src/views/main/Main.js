import React from 'react'

import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'

import logo from '../../images/logo.png'

import { AppBar, Logo, Container, CopyrightBox, HorizontalScrollDiv, LargeAvatar } from './Main.styled.components'

import Copyright from '../../components/Copyright/Copyright'

import constants from '../../modules/constants'

import { Query } from 'react-apollo'

import { GET_ATHLETES_BY_GAME } from '../../services/graphql/AthleteQueries'

import { Link } from 'react-router-dom'

const renderGroups = (athletesByGames) => {
  const result = []
  athletesByGames
    .filter((_) => _.athletes.length > 0)
    .map((_) =>
      result.push(
        <div key={_.game.id}>
          <h1>{_.game.city}</h1>
          <h2>{_.game.year}</h2>
          <HorizontalScrollDiv>
            {_.athletes.map((athlete) => (
              <Tooltip key={athlete.id} title={athlete.name + ' ' + athlete.surname}>
                <Link to={`/detail/${athlete.id}`}>
                  <LargeAvatar
                    alt={athlete.name + ' ' + athlete.surname}
                    src={`data:${athlete.photo.mimeType};base64,${athlete.photo.photo}`}
                  />
                </Link>
              </Tooltip>
            ))}
          </HorizontalScrollDiv>
        </div>
      )
    )
  return result
}

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
            return renderGroups(data.getAthletesByGame)
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
