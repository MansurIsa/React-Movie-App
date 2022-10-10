import React, { Component } from 'react'
import DescLeftContainer from './desc_page_container/left_components/DescLeftContainer'
import DescRightContainer from './desc_page_container/right_components/DescRightContainer'

export class DescPageMainContainer extends Component {
  render() {
    return (
      <div className='description_page_container'>
        <DescLeftContainer />
        <DescRightContainer />
      </div>
    )
  }
}

export default DescPageMainContainer