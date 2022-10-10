import React, { Component } from 'react'
import CommentCard from './CommentCard'

export class MainComments extends Component {
  render() {
    return (
        <div className="comments_container">
            <h1>Comments (30)</h1>
            <div className="comments">
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
            </div>
        </div>
    )
  }
}

export default MainComments