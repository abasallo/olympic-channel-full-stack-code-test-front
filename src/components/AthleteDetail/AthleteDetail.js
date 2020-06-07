import React from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import ListItemText from '@material-ui/core/ListItemText'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'
import HeightIcon from '@material-ui/icons/Height'
import List from '@material-ui/core/List'

import { LargeAvatar } from './AthleteDetail.styled.components'

import PropTypes from 'prop-types'

const AthleteDetail = (props) => (
  <React.Fragment>
    <LargeAvatar src={`data:${props.athlete.photo.mimeType};base64,${props.athlete.photo.photo}`} />
    <List>
      <ListItem>
        <ListItemIcon>
          <PersonOutlineIcon />
        </ListItemIcon>
        <ListItemText primary={props.athlete.name + ' ' + props.athlete.surname} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <PermContactCalendarIcon />
        </ListItemIcon>
        <ListItemText primary={props.athlete.dateOfBirth} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <FitnessCenterIcon />
        </ListItemIcon>
        <ListItemText primary={props.athlete.weight} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <HeightIcon />
        </ListItemIcon>
        <ListItemText primary={props.athlete.height} />
      </ListItem>
    </List>
  </React.Fragment>
)

AthleteDetail.propTypes = { athlete: PropTypes.object }

export default AthleteDetail
