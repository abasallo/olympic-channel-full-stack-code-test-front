import React from 'react'

import PropTypes from 'prop-types'

import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'

import { StyledTable, StyledPaper, Medal } from './AthleteDetailMedals.styled.components'

import goldMedal from '../../images/medal_gold.png'
import silverMedal from '../../images/medal_silver.png'
import bronzeMedal from '../../images/medal_bronze.png'

const AthleteDetailMedals = (props) => (
  <div>
    <h1>Medals</h1>
    <TableContainer component={StyledPaper}>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="center">Year</TableCell>
            <TableCell align="center">Game</TableCell>
            <TableCell align="center">
              <Medal src={goldMedal} alt="Gold" />
            </TableCell>
            <TableCell align="center">
              <Medal src={silverMedal} alt="Silver" />
            </TableCell>
            <TableCell align="center">
              <Medal src={bronzeMedal} alt="Bronze" />
            </TableCell>
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
