import React, { Component } from 'react';
import img1 from '../../img/Vector (5).png';
import img2 from '../../img/Vector (6).png';
import img3 from '../../img/Vector (7).png';
import img4 from '../../img/Vector (1).png';

export class FooterIcons extends Component {
  render() {
    return (
        <div className="social_media">
            <ul className="row">
                <li><img src={img1} alt="" /></li>
                <li><img src={img2} alt="" /></li>
                <li><img src={img3} alt="" /></li>
                <li><img src={img4} alt="" /></li>
            </ul>
        </div>
    )
  }
}

export default FooterIcons