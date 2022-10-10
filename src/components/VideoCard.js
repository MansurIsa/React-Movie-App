import React, { Component } from 'react'

export class VideoCard extends Component {
  render() {
    const {url, title} = this.props
    return (
        <div className="continue_watching_card">
            <video controls type="video/mp4" src={url}></video>
            <h3>{title}</h3>
        </div>
    )
  }
}

export default VideoCard