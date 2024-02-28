import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'

import {
  LoginContainer,
  LoginFormContainer,
  ImageContainer,
  Logo,
  InputLabelContainer,
  Label,
  CheckBoxLabelContainer,
  InputBox,
  CheckBox,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {username: '', password: '', showErrorMsg: false, errorMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPasswordsClicked = () => {
    const passwordEl = document.getElementById('password')
    if (passwordEl.type === 'password') {
      passwordEl.type = 'text'
    } else {
      passwordEl.type = 'password'
    }
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showErrorMsg, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext>
        {value => {
          const {isDarkTheme} = value
          // const websiteLogo = isDarkTheme
          // ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          // : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginContainer darkMode={isDarkTheme}>
              <LoginFormContainer
                darkMode={isDarkTheme}
                onSubmit={this.submitForm}
              >
                <ImageContainer>
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                </ImageContainer>
                <InputLabelContainer>
                  <Label darkMode={isDarkTheme} htmlFor="username">
                    USERNAME
                  </Label>
                  <InputBox
                    id="username"
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={this.onChangeUsername}
                  />
                </InputLabelContainer>
                <InputLabelContainer>
                  <Label darkMode={isDarkTheme} htmlFor="password">
                    PASSWORD
                  </Label>
                  <InputBox
                    id="password"
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={this.onChangePassword}
                  />
                </InputLabelContainer>
                <CheckBoxLabelContainer>
                  <CheckBox
                    type="checkbox"
                    id="checkbox"
                    onClick={this.onShowPasswordsClicked}
                  />
                  <Label darkMode={isDarkTheme} htmlFor="checkbox">
                    Show Password
                  </Label>
                </CheckBoxLabelContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </LoginFormContainer>
            </LoginContainer>
          )
        }}
      </ThemeContext>
    )
  }
}

export default Login
