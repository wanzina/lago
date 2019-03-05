import React, { Component } from 'react';
import './Home.css'
import Search from '@/components/Home/Search/Search'
import Menu from '@/components/Home/Menu/Menu'
import Slider from '@/components/Home/Slider/Slider'
class Home extends Component {
  render() {
    return (
      <div>
        <Search></Search>
        <div className="contain_body">
          <div className="clearfix">
            <Menu></Menu>
            <Slider></Slider>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
