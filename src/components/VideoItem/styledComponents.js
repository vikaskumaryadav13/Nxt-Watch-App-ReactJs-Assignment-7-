import styled from 'styled-components'

export const ListItem = styled.li``

export const VideoImage = styled.img`
  width: 97%;
`

export const DetailsContainer = styled.div`
  margin-top: 11px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 51px;
`

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Profile = styled.img`
    height: 51px;
    width: 51px:
    border-radius: 51px;
`

export const AboutContainer = styled.div`
  width: 84%;
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: 17px;
  min-height: 69px;
  margin-bottom: 0px;
  color: ${props => (props.darkMode ? '#94a3b8' : '#181818')};
`

export const ChannelNameViewCountAndPublishedStyling = styled.p`
  font-size: 16px;
  color: #616e7c;
  margin-top: 0px;
  margin-right: 16px;
`

export const DynamicDataContainer = styled.div`
  display: flex;
`
