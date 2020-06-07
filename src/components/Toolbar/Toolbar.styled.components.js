import styled from 'styled-components'

import MaterialUIAppBar from '@material-ui/core/AppBar'

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
