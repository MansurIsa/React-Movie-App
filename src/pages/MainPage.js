import React, { Component } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SectionHeader from '../components/SectionHeader'
import SliderSection from '../components/SliderSection'
import VideoSection from '../components/VideoSection'
import ViewAllBtn from '../components/ViewAllBtn'
import { getPopularMovie, getBestComediesMovie } from '../config/MainConfig';
export class MainPage extends Component {
  state={
    popular_movie: [],
    comedy_movie: [],
  }
  componentDidMount(){
    getPopularMovie()
    .then(movie=>{
      this.setState({
        popular_movie: movie
      })
    })

    getBestComediesMovie()
    .then(movie=>{
      this.setState({
        comedy_movie: movie
      })
    })
    
  }
  render() {
    const {popular_movie, comedy_movie} = this.state;
 
    return (
      <div>
        <Header />
        <main>
          <section>
            <VideoSection />
          </section>
          <section>
            <div className='container'>
              <SectionHeader title="Popular Movies 2022" />
              <ViewAllBtn />
            </div>
            <SliderSection movies={popular_movie} />
          </section>
          <section>
            <div className='container'>
              <SectionHeader title="Best Comedies" />
              <ViewAllBtn />
            </div>
            <SliderSection movies={comedy_movie} />
          </section>
          {/* <section>
            <div className='container'>
              <SectionHeader title="Action & Adventure" />
              <ViewAllBtn />
            </div>
            <SliderSection movies={[]} />
          </section> */}
        </main>
        <Footer />
      </div>
    )
  }
}

export default MainPage