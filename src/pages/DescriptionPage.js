import React, { Component } from 'react'
import DescPageMainContainer from '../components/DescPageMainContainer'
import MainComments from '../components/desc_page_container/comments_components/MainComments'
import Footer from '../components/Footer'
import HeaderIcons from '../components/header_component/HeaderIcons'
import Logo from '../components/header_component/Logo'
import Nav from '../components/header_component/Nav'
import SectionHeader from '../components/SectionHeader'
import SliderSection from '../components/SliderSection'
import ViewAllBtn from '../components/ViewAllBtn'

export class DescriptionPage extends Component {
  render() {
    return (
      <div>
        <header id="description_header">
            <div className="header_container row">
                <Logo />
                <Nav />
                <HeaderIcons />
            </div>
        </header>
        <section className='container'>
            <DescPageMainContainer />
        </section>
        <section>
            <div className='container'>
              <SectionHeader />
              <ViewAllBtn />
            </div>
            <SliderSection />
        </section>
        <section className='container'>
            <MainComments />
        </section>

        <Footer />
      </div>
    )
  }
}

export default DescriptionPage