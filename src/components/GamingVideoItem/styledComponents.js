import styled from 'styled-components'

export const ListItem = styled.li``
export const VideoImage = styled.img`
  width: 71%;
`
export const Title = styled.p`
  font-size: 17px;
  color: ${props => (props.darkMode ? '#94a3b8' : '#181818')};
`

export const ViewCount = styled.p`
  color: #616e7c;
  font-size: 16px;
  margin-right: 16px;
`
