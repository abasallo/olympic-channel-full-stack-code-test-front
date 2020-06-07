import styled from 'styled-components'

import MaterialUIAppBar from '@material-ui/core/AppBar'
import MaterialUIContainer from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import { customMUITheme as theme } from '../../customMUITheme'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'

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

export const DetailDiv = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const HeaderDetailDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BioDetailDiv = styled.span`
  text-align: justify;
  & > p > a > img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`

export const LargeAvatar = styled(Avatar)`
  width: 175px;
  height: 175px;
  margin-right: 20px;
`

export const StyledTable = styled(Table)`
  text-align: center;
`

export const StyledPaper = styled(Paper)`
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`
