import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
`
export const HomeContentContainer = styled.div`
  min-height: 100px;
  margin-top: 51px;
  width: 87%;
  padding: 26px;
`
export const InputBox = styled.input`
  border-radius: 4px;
  height: 38px;
  padding: 11px;
  margin-top: 11px;
  border: 1px solid #94a3b8;
  width: 61%;
  margin-top: 21px;
`
export const VideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  min-height: 81vh;
  margin-top: 16px;
  list-style-type: none;
  padding-left: 0px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88%;
  min-height: 81vh;
`
export const Button = styled.button`
  border: 1px solid #94a3b8;
  background-color: #ffffff;
  border-radius: 4px;
  height: 40px;
  width: 58px;
  cursor: pointer;
`

export const BannerContainer = styled.div`
  height: 251px;
  margin-top: 21px;
  display: flex;
  width: 92%;
  flex-direction: column;
  padding: 16px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
`
export const BannerLogo = styled.img`
  width: 16%;
`

export const BannerHeading = styled.p`
  width: 38%;
  font-size: 26px;
`
export const BannerButton = styled.button`
  border: 2px solid #94a3b8;
  background-color: transparent;
  border-radius: 4px;
  height: 48px;
  width: 16%;
  cursor: pointer;
`

export const CloseButton = styled.button`
  border: none;
  background-color: #ffffff;
  align-self: flex-end;
  height: 31px;
  width: 31px;
  cursor: pointer;
`

export const FailureImage = styled.img`
  margin-top: 51px;
  width: 25%;
`
export const NoSearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 91vh;
  width: 100%;
`

export const Suggestion = styled.p`
  color: ${props => (!props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const NoResultsMsg = styled.h1`
  color: ${props => (!props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const RetryButtonInFailure = styled.button`
  background-color: #4f46e5;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  height: 40px;
  width: 10%;
`
