import React from 'react'

import PropTypes from 'prop-types'

import { DetailDiv, HeaderDetailDiv } from './AthleteDetail.styled.components'

import AthleteDetailHeader from '../AthleteDetailHeader/AthleteDetailHeader'
import AthleteDetailMedals from '../AthleteDetailMedals/AthleteDetailMedals'
import AthleteDetailBio from '../AthleteDetailBio/AthleteDetailBio'

const AthleteDetail = (props) => (
  <DetailDiv>
    <HeaderDetailDiv>
      <AthleteDetailHeader athlete={props.athlete} />
    </HeaderDetailDiv>
    <AthleteDetailMedals athleteResults={props.athlete.athleteResults} />
    <AthleteDetailBio bio={props.athlete.bio} />
  </DetailDiv>
)

AthleteDetail.propTypes = { athlete: PropTypes.object }

export default AthleteDetail
