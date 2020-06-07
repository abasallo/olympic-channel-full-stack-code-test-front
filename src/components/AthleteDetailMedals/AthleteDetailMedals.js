import React from 'react'

import PropTypes from 'prop-types'

import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'

import { StyledTable, StyledPaper } from './AthleteDetailMedals.styled.components'

const AthleteDetailMedals = (props) => (
  <div>
    <h1>Medals</h1>
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
          {props.athleteResults.map((result) => (
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
  </div>
)

AthleteDetailMedals.propTypes = { athleteResults: PropTypes.array }

export default AthleteDetailMedals
