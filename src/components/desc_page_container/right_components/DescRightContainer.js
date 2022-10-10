import React, { Component } from 'react'
import BtnComponent from './BtnComponent'
import MovieBtns from './MovieBtns'
import Paragraph from './Paragraph'
import Trailers from './Trailers'

export class DescRightContainer extends Component {
  render() {
    return (
      <div className='desc_page_right_container'>
        <BtnComponent />
        <Paragraph />
        <MovieBtns />
        <Trailers />
      </div>
    )
  }
}

export default DescRightContainer