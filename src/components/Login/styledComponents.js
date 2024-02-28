import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
`

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 36%;
  min-height: 61vh;
  border-radius: 11px;
  padding: 26px;
  box-shadow: 0px 0px 1px 1px #ffffff;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#ffffff')};
  @media screen and (max-width: 575px) {
    width: 81%;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 61px;
  margin-bottom: 50px;
`

export const Logo = styled.img`
  width: 26%;
`

export const InputLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  padding: 11px;
`

export const Label = styled.label`
  color: ${props => (props.darkMode ? '#ffffff' : '#0f0f0f')};
`

export const CheckBoxLabelContainer = styled.div`
  display: flex;
  margin-top: 11px;
  margin-left: 11px;
`

export const InputBox = styled.input`
  border-radius: 4px;
  height: 44px;
  padding: 11px;
  margin-top: 11px;
  border: 1px solid #94a3b8;
`

export const CheckBox = styled.input`
  margin-top: 4px;
`

export const LoginButton = styled.button`
  margin-top: 51px;
  border: 0px;
  border-radius: 4px;
  background-color: #4f46e5;
  padding: 11px;
  color: #ffffff;
  height: 38px;
`

export const ErrorMsg = styled.p`
  color: red;
`
