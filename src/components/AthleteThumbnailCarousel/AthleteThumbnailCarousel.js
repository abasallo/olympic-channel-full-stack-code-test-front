import React from 'react'

import { LargeAvatar, HorizontalScrollDiv } from './AthleteThumbnailCarousel.styled.components'

import PropTypes from 'prop-types'

import Tooltip from '@material-ui/core/Tooltip'

import { Link } from 'react-router-dom'

const AthleteThumbnailCarousel = (props) => {
  const result = []
  props.athletesByGames
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

AthleteThumbnailCarousel.propTypes = { athletesByGames: PropTypes.array }

export default AthleteThumbnailCarousel
