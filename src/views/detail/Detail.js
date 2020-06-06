import React from 'react'

import Toolbar from '@material-ui/core/Toolbar'

import logo from '../../images/logo.png'

import { AppBar, Logo, Container, CopyrightBox } from './Detail.styled.components'

import Copyright from '../../components/Copyright/Copyright'

import constants from '../../modules/constants'

const Detail = () => {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Logo src={logo} alt={constants.LOGO_ALT} />
        </Toolbar>
      </AppBar>
      <Container>Detail</Container>
      <CopyrightBox mt={8}>
        <Copyright />
      </CopyrightBox>
    </React.Fragment>
  )
}

export default Detail
