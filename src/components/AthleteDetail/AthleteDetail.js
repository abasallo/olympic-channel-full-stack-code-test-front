import React from 'react'

import PropTypes from 'prop-types'

import ReactMarkdown from 'react-markdown'

import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'

import { DetailDiv, HeaderDetailDiv, BioDetailDiv, StyledPaper, StyledTable } from './AthleteDetail.styled.components'

import AthleteDetailHeader from '../AthleteDetailHeader/AthleteDetailHeader'

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

const AthleteDetail = (props) => (
  <DetailDiv>
    <HeaderDetailDiv>
      <AthleteDetailHeader athlete={props.athlete} />
    </HeaderDetailDiv>
    <div>
      <h1>Medals</h1>
      {renderMedals(props.athlete.athleteResults)}
    </div>
    <div>
      <h1>Bio</h1>
      <BioDetailDiv>
        <ReactMarkdown source={props.athlete.bio} />
      </BioDetailDiv>
    </div>
  </DetailDiv>
)

AthleteDetail.propTypes = { athlete: PropTypes.object }

export default AthleteDetail
