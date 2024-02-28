import styled from 'styled-components'

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 87%;
  min-height: 81vh;
`

export const VideoDetailsContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
`

export const VideoContentContainer = styled.div`
  min-height: 100px;
  width: 87%;
  margin-top: 51px;
  padding: 26px;
`

export const PlayerAndVideoDetailsContainer = styled.div`
  min-height: 100vh;
  padding: 21px;
`

export const ReactPlayerContainer = styled.div`
  width: 100%;
`

export const DetailsContainer = styled.div`
  margin-top: 11px;
  display: flex;
  margin-bottom: 51px;
`

export const AboutContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
`

export const Description = styled.p`
  font-size: 17px;
  margin-top: 28px;
  margin-bottom; 0px;
  color: ${props => (props.darkMode ? '#94a3b8' : '#181818')};
`

export const DynamicDataStyling = styled.p`
  font-size: 16px;
  color: ${props => (!props.darkMode ? '#181818' : '#64748b')};
  margin-right: 16px;
  margin-top: 0px;
`

export const DynamicDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const LeftDynamicContainer = styled.div`
  width: 39%;
  display: flex;
`

export const RightDynamicContainer = styled.div`
  width: 39%;
  display: flex;
  justify-content: flex-end;
`

export const Button = styled.button`
  background-color: transparent;
  margin-right: 11px;
  border: none;
  cursor: pointer;
  color: ${props => (props.active ? '#2563eb' : '#64748b')} !important;
`

export const DislikeButton = styled.button`
  background-color: transparent;
  margin-right: 11px;
  border: none;
  cursor: pointer;
  color: ${props => (props.active ? '#2563eb' : '#64748b')} !important;
`

export const SaveButton = styled.button`
  background-color: transparent;
  margin-right: 11px;
  border: none;
  cursor: pointer;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
`

export const Title = styled.p`
  font-size: 19px;
  color: ${props => (props.darkMode ? '#94a3b8' : '#181818')};
  min-height: 69px;
  margin-bottom: 0px;
`

export const ChannelNameViewCountAndPublishedStyling = styled.p`
  font-size: 16px;
  color: #616e7c;
  margin-top: 0px;
  margin-right: 16px;
`

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 21px;
`

export const Profile = styled.img`
    height: 51px;
    width: 51px:
    border-radius: 51px;
`

export const HorizontalLine = styled.hr`
  color: red;
  background-color: green;
`
