import React from 'react'

import PropTypes from 'prop-types'

import ReactMarkdown from 'react-markdown'

import { BioDetailDiv } from './AthleteDetailBio.styled.components'

const AthleteDetailBio = (props) => (
  <div>
    <h1>Bio</h1>
    <BioDetailDiv>
      <ReactMarkdown source={props.bio} />
    </BioDetailDiv>
  </div>
)

AthleteDetailBio.propTypes = { bio: PropTypes.string }

export default AthleteDetailBio
