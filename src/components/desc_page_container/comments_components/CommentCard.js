import React, { Component } from 'react';
import img from '../../../img/Ellipse 13.png';
export class CommentCard extends Component {
  render() {
    return (
        <div className="comment_card">
            <div className="comment_img">
                <img src={img} alt="" />
            </div>
            <div className="comment">
                <h5>Kukkiriza Emmanuel  <span>4 month ago</span></h5>
                <p>Love Zoe and I'm happy to have more of her this year</p>
            </div>
        </div>
    )
  }
}

export default CommentCard