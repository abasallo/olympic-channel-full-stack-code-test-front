import React from 'react'

import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import Tooltip from '@material-ui/core/Tooltip'

import { LargeAvatar, HorizontalScrollDiv } from './AthleteThumbnailCarousel.styled.components'

import constants from '../../modules/constants'

import { sortAthletesByGameScore } from '../../modules/sorting'

const AthleteThumbnailCarousel = (props) => {
  props.athletesByGame.map((_) => (_.athletes = sortAthletesByGameScore(_)))
  const result = []
  props.athletesByGame
    .filter((_) => _.athletes.length > 0)
    .map((_) =>
      result.push(
        <div key={_.game.id}>
          <h1>{_.game.city}</h1>
          <h2>{_.game.year}</h2>
          <HorizontalScrollDiv>
            {_.athletes.map((athlete) => (
              <Tooltip key={athlete.id} title={athlete.name + ' ' + athlete.surname}>
                <Link to={`${constants.PATH_DETAIL}${athlete.id}`}>
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

AthleteThumbnailCarousel.propTypes = { athletesByGame: PropTypes.array }

export default AthleteThumbnailCarousel
