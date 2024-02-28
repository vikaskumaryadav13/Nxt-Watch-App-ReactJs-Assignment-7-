import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (!props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const TrendingContentContainer = styled.div`
  min-height: 100px;
  width: 87%;
  padding: 26px;
  margin-top: 51px;
`

export const Heading = styled.h1`
  color: ${props => (!props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 81px;
  width: 81px;
  border-radius: 81px;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  margin: 26px;
`

export const LinkItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 31px;
  margin-top: 31px;
  font-size: 26px;
  height: 91px;
  padding: 21px;
  background-color: ${props => (props.darkMode ? '#181818' : '#ffffff')};
  color: ${props => (!props.darkMode ? 'black' : '#ffffff')};
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
  width: 87%;
  min-height: 81vh;
`
