import React from 'react'

import Toolbar from '@material-ui/core/Toolbar'

import logo from '../../images/logo.png'

import {
  AppBar,
  Logo,
  Container,
  CopyrightBox,
  LargeAvatar,
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
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'
import HeightIcon from '@material-ui/icons/Height'
import TableContainer from '@material-ui/core/TableContainer'

import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'

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

const renderAthleteStats = (athlete) => (
  <List>
    <ListItem>
      <ListItemIcon>
        <PersonOutlineIcon />
      </ListItemIcon>
      <ListItemText primary={athlete.name + ' ' + athlete.surname} />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <PermContactCalendarIcon />
      </ListItemIcon>
      <ListItemText primary={athlete.dateOfBirth} />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <FitnessCenterIcon />
      </ListItemIcon>
      <ListItemText primary={athlete.weight} />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <HeightIcon />
      </ListItemIcon>
      <ListItemText primary={athlete.height} />
    </ListItem>
  </List>
)

const renderAthlete = (athlete) => (
  <DetailDiv>
    <HeaderDetailDiv>
      <LargeAvatar src={`data:${athlete.photo.mimeType};base64,${athlete.photo.photo}`} />
      {renderAthleteStats(athlete)}
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
