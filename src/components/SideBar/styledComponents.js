import styled from 'styled-components'

export const SideBarContainer = styled.ul`
  min-height: 100vh;
  width: 19%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 26px;
  list-style-type: none;
  margin-top: 0px;
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
`

export const OptionItem = styled.li`
  margin-bottom: 31px;
  font-size: 19px;
`

export const OptionsContainer = styled.div`
  margin: 0px;
  top: 100px;
  position: fixed;
`

export const ContactUsContainer = styled.div`
  color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
  height: 198px;
  top: 81vh;
  position: fixed;
  width: 16%;
`

export const ContactUsHeading = styled.p`
  font-size: 16px;
  padding-left: 21px;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 69%;
  height: 51px;
  margin: 0px 10px 0px 15px;
`

export const SocialMediaIcon = styled.img`
  width: 39px;
  height: 39px;
`

export const ContactUsDescription = styled.p`
  font-size: 16px;
  padding-left: 21px;
  position: static;
`
