import React from 'react';
import { Carousel } from 'antd';
import './Slider.css'
const Slider = (props) => (
    <>
        {/* <!--轮播--> */}

		<div id="home_banner">
            <Carousel autoplay dots >
                <div><img src="/img/CgotOVuSEg6ATWx_AAUxpwnVuJ0559.PNG" /></div>
                <div><img src="/img/CgotOVuVJweAAVnhAAnrmIt8GF8554.PNG" /></div>
            </Carousel>
           {/*  <div className="swiper-container"> */}
               
               {/*  <!-- Add Pagination --> */}
				
                {/* <!-- Add Arrows --> */}
				<div className="control">
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>

            {/* </div> */}
        </div>
    </>
)

export default Slider
