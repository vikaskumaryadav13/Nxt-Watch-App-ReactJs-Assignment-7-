import styled from 'styled-components'

export const PopupContainer = styled.div`
  width: 49%;
`
export const LogoutButton = styled.button`
  height: 36px;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  color: ${props => (props.darkMode ? '#ffffff' : '#3b82f6')};
  background-color: ${props => (props.darkMode ? '#181818' : '#ffffff')};
  border: 2px solid ${props => (props.darkMode ? '#ffffff' : '#3b82f6')};
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => (props.darkMode ? '#ffffff' : '#3b82f6')};
  background-color: ${props => (props.darkMode ? '#181818' : '#ffffff')};
  min-height: 21vh;
`
export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 26px;
  width: 48%;
`

export const WarningMessage = styled.p`
  color: ${props => (props.darkMode ? '#ffffff' : '#00306e')};
  font-size: 19px;
`

export const PopupButton = styled.button`
  height: 36px;
  border-radius: 4px;
  width: 100%;
  margin-right: 21px;
  cursor: pointer;
  color: ${props => (props.outline ? '#181818' : '#ffffff')};
  background-color: ${props => (props.outline ? '#ffffff' : '#3b82f6')};
  border: 2px solid ${props => (props.outline ? '#181818' : '#3b82f6')};
`
