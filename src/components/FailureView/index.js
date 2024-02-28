import ThemeContext from '../../context/ThemeContext'

import {
  FailureContainer,
  ErrorMsg,
  Suggestion,
  FailureImage,
  RetryButtonInFailure,
} from './styledComponents'

const FailureView = props => {
  const {retryButtonClicked} = props

  const onClickRetryButton = () => {
    retryButtonClicked()
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImg = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureContainer>
            <FailureImage src={failureImg} alt="failure view" />
            <ErrorMsg darkMode={isDarkTheme}>
              Oops! Something Went Wrong
            </ErrorMsg>
            <Suggestion darkMode={isDarkTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </Suggestion>
            <RetryButtonInFailure type="button" onClick={onClickRetryButton}>
              Retry
            </RetryButtonInFailure>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default FailureView
