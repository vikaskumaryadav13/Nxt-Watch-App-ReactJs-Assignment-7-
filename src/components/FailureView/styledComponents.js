import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 91vh;
`

export const FailureImage = styled.img`
  margin-top: 48px;
  width: 26%;
`

export const Suggestion = styled.p`
  color: ${props => (!props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`
export const ErrorMsg = styled.h1`
  color: ${props => (!props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const RetryButtonInFailure = styled.button`
  border-radius: 4px;
  color: #ffffff;
  height: 39px;
  width: 11%;
  background-color: #4f46e5;
  border: none;
`
