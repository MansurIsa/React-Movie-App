import React, { Component } from 'react';
import SectionHeader from './SectionHeader';
import VideoCard from './VideoCard';
import ViewAllBtn from './ViewAllBtn';
import { getVideos } from '../config/MainConfig';
export class VideoSection extends Component {
  state={
    videos: []
  }
  componentDidMount(){
    getVideos()
    .then(video=>{
      this.setState({
        videos: video
      })
    })
  }
  render() {
    const {videos} = this.state
    return (
        <div className="container">
            <SectionHeader title="Continue watching" />
            <ViewAllBtn />
            <div className="continue_watching_container">
              {
                videos.map((video, i)=>{
                  return(
                    <VideoCard key={i} url={video.url} title={video.title} />
                  )
                })
              }
            </div>
        </div>
    )
  }
}

export default VideoSection