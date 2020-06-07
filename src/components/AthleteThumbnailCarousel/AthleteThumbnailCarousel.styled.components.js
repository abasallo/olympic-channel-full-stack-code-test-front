import styled from 'styled-components'

import Avatar from '@material-ui/core/Avatar'

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
