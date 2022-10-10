import React, { Component } from 'react'
import LeftBtn from './slider_components/LeftBtn'
import RightBtn from './slider_components/RightBtn'
import SliderCard from './slider_components/SliderCard'

export class SliderSection extends Component {
    state={
        container: React.createRef(),
        count: 0
    }

    slide(){
        const container = this.state.container.current;

        for(let i = 0; i < container.children.length; i++){
            container.children[i].style.transform = `translateX(-${this.state.count*300}px)`;
        }
    }
    componentDidMount(){
        setInterval(()=>{
            let countNew = this.state.count
            if(countNew < this.state.container.current.children.length - 4){
                 countNew++;
            }else{
                countNew = 0;
            }
            this.setState({
                count: countNew
            })
            this.slide()
        }, 3000)
    }

    rightBtn = () =>{
        let countNew = this.state.count
        if(countNew < this.state.container.current.children.length - 4){
                countNew++;
        }else{
            countNew = 0;
        }
        this.setState({
            count: countNew
        })
        this.slide()
    }

    leftbtn = () => {
        let countNew = this.state.count
        if(countNew > 0){
                countNew--;
        }else{
            countNew = 0;
        }
        this.setState({
            count: countNew
        })
        this.slide()
    }

  render() {
    const {movies} = this.props;
    const {container} = this.state
    return (
      <div className='slider_container row'>
        <LeftBtn  leftbtnPr={this.leftbtn} />
        <div ref={container} className='slider_inner_container' id='mainSliderContainer' >
          {
            movies.map((movie, i)=>{
              return(
                <SliderCard key={i} posterImg={movie.poster_path} posterTitle={movie.title} />
              )
            })
          }

        </div>
        <RightBtn rightBtnPr={this.rightBtn} />
      </div>
    )
  }
}

export default SliderSection
