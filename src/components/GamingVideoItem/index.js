import {Link} from 'react-router-dom'
import {ListItem, VideoImage, Title, ViewCount} from './styledComponents'

import './index.css'

import ThemeContext from '../../context/ThemeContext'

const GamingVideoItem = props => {
  const {gamingDetails} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link to={`/videos/${gamingDetails.id}`} className="video-link-item">
            <ListItem>
              <VideoImage
                src={gamingDetails.thumbnailUrl}
                alt="video thumbnail"
              />
              <Title darkMode={isDarkTheme}>{gamingDetails.title}</Title>

              <ViewCount>{`${gamingDetails.viewCount} Watching Worldwide`}</ViewCount>
            </ListItem>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoItem
