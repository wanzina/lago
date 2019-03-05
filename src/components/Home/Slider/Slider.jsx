import React from 'react';
import { Link } from 'react-router-dom';
const Slider = (props) => (
  <>
    {/* <!--轮播--> */}
    <div className="home_banner">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <Link to="/">
              <img alt="" src="../img/CgotOVuSEg6ATWx_AAUxpwnVuJ0559.PNG" />
            </Link>
          </div>
          <div className="swiper-slide">
            <Link to="/">
              <img alt="" src="../img/CgotOVuVJweAAVnhAAnrmIt8GF8554.PNG" />
            </Link>
          </div>
        </div>
        {/*  <!-- Add Pagination --> */}
        <div className="swiper-pagination"></div>
        {/* <!-- Add Arrows --> */}
        <div className="control">
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>

      </div>
    </div>
  </>
)

export default Slider
