import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
`

export const SavedVideosContentContainer = styled.div`
  min-height: 100px;
  width: 87%;
  padding: 26px;
  margin-top: 49px;
`

export const VideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  min-height: 81vh;
  margin-top: 0px;
  list-style-type: none;
  padding-left: 0px;
  width: 100%;
`

export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 49px;
`

export const NoSavedVideos = styled.img`
  width: 51%;
`

export const NoSavedVideosSuggestion = styled.p`
  color: ${props => (!props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const NoSavesVideosText = styled.h1`
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
  margin-top: 31px;
  margin-bottom: 31px;
  font-size: 26px;
  background-color: ${props => (props.darkMode ? '#181818' : '#ffffff')};
  color: ${props => (!props.darkMode ? 'black' : '#ffffff')};
  height: 91px;
  padding: 21px;
`

export const Heading = styled.h1`
  color: ${props => (!props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`
