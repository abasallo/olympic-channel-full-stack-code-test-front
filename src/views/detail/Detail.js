import React from 'react'

import Toolbar from '@material-ui/core/Toolbar'

import logo from '../../images/logo.png'

import {
  AppBar,
  Logo,
  Container,
  CopyrightBox,
  DetailDiv,
  HeaderDetailDiv,
  BioDetailDiv,
  StyledPaper,
  StyledTable
} from './Detail.styled.components'

import Copyright from '../../components/Copyright/Copyright'

import constants from '../../modules/constants'

import { useParams } from 'react-router'

import { Query } from 'react-apollo'

import { GET_ATHLETE } from '../../services/graphql/AthleteQueries'

import ReactMarkdown from 'react-markdown'
import TableContainer from '@material-ui/core/TableContainer'

import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import AthleteDetail from '../../components/AthleteDetail/AthleteDetail'

const renderMedals = (athleteResults) => (
  <TableContainer component={StyledPaper}>
    <StyledTable>
      <TableHead>
        <TableRow>
          <TableCell align="center">Year</TableCell>
          <TableCell align="center">Game</TableCell>
          <TableCell align="center">Gold</TableCell>
          <TableCell align="center">Silver</TableCell>
          <TableCell align="center">Bronze</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {athleteResults.map((result) => (
          <TableRow key={result.id}>
            <TableCell align="center">{result.game.year}</TableCell>
            <TableCell align="center">{result.game.city}</TableCell>
            <TableCell align="center">{result.gold}</TableCell>
            <TableCell align="center">{result.silver}</TableCell>
            <TableCell align="center">{result.bronze}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </StyledTable>
  </TableContainer>
)

const renderAthlete = (athlete) => (
  <DetailDiv>
    <HeaderDetailDiv>
      <AthleteDetail athlete={athlete} />
    </HeaderDetailDiv>
    <div>
      <h1>Medals</h1>
      {renderMedals(athlete.athleteResults)}
    </div>
    <div>
      <h1>Bio</h1>
      <BioDetailDiv>
        <ReactMarkdown source={athlete.bio} />
      </BioDetailDiv>
    </div>
  </DetailDiv>
)

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
            return renderAthlete(data.getAthlete)
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
