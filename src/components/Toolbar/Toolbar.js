import React from 'react'

import ToolbarMaterialUI from '@material-ui/core/Toolbar'

import { Link } from 'react-router-dom'

import { AppBar, Logo } from './Toolbar.styled.components'

import logo from '../../images/logo.png'

import constants from '../../modules/constants'

const Toolbar = () => (
  <AppBar position="static">
    <ToolbarMaterialUI>
      <Link to={constants.PATH_ROOT}>
        <Logo src={logo} alt={constants.LOGO_ALT} />
      </Link>
    </ToolbarMaterialUI>
  </AppBar>
)

export default Toolbar
