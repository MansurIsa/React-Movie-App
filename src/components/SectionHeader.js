import React, { Component } from 'react'

export class SectionHeader extends Component {
  render() {
    const {title} = this.props
    return (
        <div className="section_header">
            <h2>{title}</h2>
            <span></span>
        </div>
    )
  }
}

export default SectionHeader