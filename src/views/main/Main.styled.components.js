import styled from 'styled-components'

import MaterialUIAppBar from '@material-ui/core/AppBar'
import MaterialUIContainer from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'

import { customMUITheme as theme } from '../../customMUITheme'

export const AppBar = styled(MaterialUIAppBar)`
  flex-grow: 1;
  background-color: #ffffff;
  z-index: ${theme.zIndex.drawer + 1};
  margin-bottom: 50px;
`

export const Logo = styled.img`
  flex-grow: 1;
  max-width: 40px;
  width: 100%;
  height: auto;
`

export const Container = styled(MaterialUIContainer)`
  margin-top: 25px;
  text-align: center;
`

export const CopyrightBox = styled(Box)`
  margin-top: 25px;
  text-align: center;
`

export const HorizontalScrollDiv = styled.div`
  display: flex;
  overflow-x: auto;
  align-items: center;
  justify-content: center;
`

export const LargeAvatar = styled(Avatar)`
  width: 75px;
  height: 75px;
  margin: 3px;
`
