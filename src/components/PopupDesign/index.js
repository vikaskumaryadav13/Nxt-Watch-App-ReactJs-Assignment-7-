import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import {
  PopupContainer,
  LogoutButton,
  ModalContainer,
  PopupButton,
  ButtonsContainer,
  WarningMessage,
} from './styledComponents'

import 'reactjs-popup/dist/index.css'

const PopupDesign = props => {
  const onLogoutClicked = () => {
    const {history} = props
    Cookies.remove('jwt_token')

    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <PopupContainer>
            <Popup
              modal
              trigger={
                <LogoutButton type="button" darkMode={isDarkTheme}>
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <ModalContainer darkMode={isDarkTheme}>
                  <WarningMessage darkMode={isDarkTheme}>
                    Are you sure, you want to logout
                  </WarningMessage>
                  <ButtonsContainer>
                    <PopupButton type="button" outline onClick={() => close()}>
                      Cancel
                    </PopupButton>
                    <PopupButton type="button" onClick={onLogoutClicked}>
                      Confirm
                    </PopupButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </PopupContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(PopupDesign)
