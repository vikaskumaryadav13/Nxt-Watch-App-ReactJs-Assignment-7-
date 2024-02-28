import {BiListPlus} from 'react-icons/bi'
import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import SideBar from '../SideBar'

import {
  SavedVideosContainer,
  SavedVideosContentContainer,
  VideosContainer,
  NoSavedVideosContainer,
  NoSavedVideos,
  NoSavesVideosText,
  NoSavedVideosSuggestion,
  LinkItem,
  IconContainer,
  Heading,
} from './styledComponents'

import VideoItem from '../VideoItem'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideosList} = value
      const renderSavedVideos = () => (
        <>
          <LinkItem darkMode={isDarkTheme}>
            <IconContainer darkMode={isDarkTheme}>
              <BiListPlus className="header-icon" />
            </IconContainer>
            <Heading darkMode={isDarkTheme}>Saved Videos</Heading>
          </LinkItem>
          <VideosContainer>
            {savedVideosList.map(eachMovieDetails => (
              <VideoItem
                key={eachMovieDetails.videoDetails.id}
                eachMovieDetails={eachMovieDetails.videoDetails}
              />
            ))}
          </VideosContainer>
        </>
      )

      return (
        <>
          <Header />
          <SavedVideosContainer
            darkMode={isDarkTheme}
            data-testid="savedVideos"
          >
            <SideBar />
            <SavedVideosContentContainer>
              {savedVideosList.length === 0 ? (
                <NoSavedVideosContainer>
                  <NoSavedVideos
                    alt="no saved videos"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  />
                  <NoSavesVideosText darkMode={isDarkTheme}>
                    No saved videos found
                  </NoSavesVideosText>
                  <NoSavedVideosSuggestion darkMode={isDarkTheme}>
                    Save your videos by clicking a button
                  </NoSavedVideosSuggestion>
                </NoSavedVideosContainer>
              ) : (
                renderSavedVideos()
              )}
            </SavedVideosContentContainer>
          </SavedVideosContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
