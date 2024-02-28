import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiOutlineFire, HiFire} from 'react-icons/hi'
import ThemeContext from '../../context/ThemeContext'
import VideoItem from '../VideoItem'

import './index.css'

import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'

import {
  TrendingContainer,
  TrendingContentContainer,
  VideosContainer,
  LoaderContainer,
  LinkItem,
  IconContainer,
  Heading,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    trendingVideosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedMoviesList = data.videos.map(eachMovieDetails => ({
        id: eachMovieDetails.id,
        title: eachMovieDetails.title,
        publishedAt: eachMovieDetails.published_at,
        thumbnailUrl: eachMovieDetails.thumbnail_url,
        viewCount: eachMovieDetails.view_count,
        channelName: eachMovieDetails.channel.name,
        profileImageUrl: eachMovieDetails.channel.profile_image_url,
      }))

      this.setState({
        trendingVideosList: updatedMoviesList,
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
    this.getTrendingVideos()
  }

  renderTrendingVideos = () => {
    const {trendingVideosList} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <LinkItem darkMode={isDarkTheme}>
                <IconContainer darkMode={isDarkTheme}>
                  {isDarkTheme ? (
                    <HiFire className="header-icon" />
                  ) : (
                    <HiOutlineFire className="header-icon" />
                  )}
                </IconContainer>
                <Heading darkMode={isDarkTheme}>Trending</Heading>
              </LinkItem>
              <VideosContainer>
                {trendingVideosList.map(eachMovieDetails => (
                  <VideoItem
                    key={eachMovieDetails.id}
                    eachMovieDetails={eachMovieDetails}
                  />
                ))}
              </VideosContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
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
        renderBasedOnApiStatus = this.renderTrendingVideos()
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
              <TrendingContainer darkMode={isDarkTheme} data-testid="trending">
                <SideBar />
                <TrendingContentContainer>
                  {renderBasedOnApiStatus}
                </TrendingContentContainer>
              </TrendingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
