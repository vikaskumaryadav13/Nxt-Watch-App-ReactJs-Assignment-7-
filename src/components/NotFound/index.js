import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import SideBar from '../SideBar'

import {
  NotFoundContainer,
  NotFoundContentContainer,
  NotFoundImage,
  NotFoundText,
  SorryMsg,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NotFoundContainer darkMode={isDarkTheme} data-testid="not-found">
            <SideBar />
            <NotFoundContentContainer>
              <NotFoundImage src={notFoundImage} alt="not found" />
              <NotFoundText>Page Not Found</NotFoundText>
              <SorryMsg>
                we are sorry, the page you requested could not be found.
              </SorryMsg>
            </NotFoundContentContainer>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
