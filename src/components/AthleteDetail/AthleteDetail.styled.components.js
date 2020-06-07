import styled from 'styled-components'

import Table from '@material-ui/core/Table'
import Paper from '@material-ui/core/Paper'

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

export const StyledTable = styled(Table)`
  text-align: center;
`

export const StyledPaper = styled(Paper)`
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`
