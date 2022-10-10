import React, { Component } from 'react'
import DescriptionPage from './pages/DescriptionPage'
import MainPage from './pages/MainPage'

export class App extends Component {
  render() {
    return (
      <div>
        <MainPage />
        {/* <DescriptionPage /> */}
      </div>
    )
  }
}

export default App