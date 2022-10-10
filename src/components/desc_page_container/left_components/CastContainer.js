import React, { Component } from 'react'
import img from '../../../img/Ellipse 10.png'
export class CastContainer extends Component {
  render() {
    return (
        <div className="cast_container">
        <h2>CAST</h2>
        <ul className="cast_list_container column">
            <li><img src={img} alt="" /> <p className="column_center" >Zoe Kravitz<span>as Angela Childs</span></p></li>
            <li><img src={img} alt="" /> <p className="column_center" >Zoe Kravitz<span>as Angela Childs</span></p></li>
            <li><img src={img} alt="" /> <p className="column_center" >Zoe Kravitz<span>as Angela Childs</span></p></li>
            <li><img src={img} alt="" /> <p className="column_center" >Zoe Kravitz<span>as Angela Childs</span></p></li>
            <li><img src={img} alt="" /> <p className="column_center" >Zoe Kravitz<span>as Angela Childs</span></p></li>
            <li><img src={img} alt="" /> <p className="column_center" >Zoe Kravitz<span>as Angela Childs</span></p></li>
           
        </ul>

        <button className="cast_container_btn">
            <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.2119 4L13 4.53906L6.5 9L0 4.53906L0.784063 4L6.5 7.91927L12.2119 4Z" fill="white"/>
                <path d="M12.2119 0L13 0.539062L6.5 5L0 0.539062L0.784063 0L6.5 3.91927L12.2119 0Z" fill="white"/>
                </svg>     
        </button>
    </div>
    )
  }
}

export default CastContainer