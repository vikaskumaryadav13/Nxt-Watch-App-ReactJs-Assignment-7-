import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import GamingVideoItem from '../GamingVideoItem'
import FailureView from '../FailureView'

import {
  LoaderContainer,
  GamingContainer,
  GamingContentContainer,
  LinkItem,
  IconContainer,
  VideosContainer,
  Heading,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    gamingVideosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedGamesList = data.videos.map(eachMovieDetails => ({
        id: eachMovieDetails.id,
        title: eachMovieDetails.title,
        thumbnailUrl: eachMovieDetails.thumbnail_url,
        viewCount: eachMovieDetails.view_count,
      }))

      this.setState({
        gamingVideosList: updatedGamesList,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  retryButtonClicked = () => {
    this.getGamingVideos()
  }

  renderGamingVideos = () => {
    const {gamingVideosList} = this.state
    return (
      <VideosContainer>
        {gamingVideosList.map(eachGamingDetails => (
          <GamingVideoItem
            key={eachGamingDetails.id}
            gamingDetails={eachGamingDetails}
          />
        ))}
      </VideosContainer>
    )
  }

  render() {
    const {apiStatus} = this.state
    let renderBasedOnApiStatus

    switch (apiStatus) {
      case apiStatusConstants.failure:
        renderBasedOnApiStatus = (
          <FailureView retryButtonClicked={this.retryButtonClicked} />
        )
        break
      case apiStatusConstants.success:
        renderBasedOnApiStatus = this.renderGamingVideos()
        break
      case apiStatusConstants.inProgress:
        renderBasedOnApiStatus = this.renderLoader()
        break
      default:
        renderBasedOnApiStatus = ''
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <GamingContainer darkMode={isDarkTheme} data-testid="gaming">
                <SideBar />
                <GamingContentContainer>
                  <LinkItem darkMode={isDarkTheme}>
                    <IconContainer darkMode={isDarkTheme}>
                      <SiYoutubegaming className="header-icon" />
                    </IconContainer>
                    <Heading darkMode={isDarkTheme}>Gaming</Heading>
                  </LinkItem>
                  {renderBasedOnApiStatus}
                </GamingContentContainer>
              </GamingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Gaming
