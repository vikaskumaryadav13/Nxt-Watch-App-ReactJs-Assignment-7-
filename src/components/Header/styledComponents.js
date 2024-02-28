import styled from 'styled-components'

export const NavDesktopContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 59px;
  padding: 16px;
  position: fixed;
  width: 100%;
  background-color: ${props => (props.darkMode ? '#181818' : '#ffffff')};
  color: ${props => (!props.darkMode ? '#181818' : '#ffffff')};
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const NavBarDesktopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 97%;
`

export const WebsiteLogo = styled.img`
  width: 40%;
`
export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 16%;
  height: 51px;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
`

export const Profile = styled.img`
  width: 11%;
  margin-right: 29px;
`

export const ThemeLogo = styled.img`
  width: 31%;
`
