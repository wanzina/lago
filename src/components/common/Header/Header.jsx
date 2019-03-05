import React from 'react';
import { NavLink, Link } from 'react-router-dom'


import './Header.css'
const Header = (props) => (

  <>
    {/* header */}
    <div id="lg_header">
      {/* 头部黑色导航 */}
      <div id="lg_hbar">
        <div className="inner clearfix">
          <div className="lg_hbar_l fl">
            <Link to="/" className="lg_app">拉勾app</Link>
            <Link to="/" className="lg_os">进入企业版</Link>
          </div>
          <ul className="lg_hbar_r fr">
            <li><Link to="/" className="msg_dropdown">消息</Link></li>
            <li><Link to="/myresume">我的简历</Link></li>
            <li><Link to="/">投递箱</Link></li>
            <li><Link to="/">收藏夹</Link></li>
            <li className="user_dropdown">
              <span className="unick bl">用户名</span>
              <em className="triangle_down_gray"></em>
              <ul style={{ display: 'none' }}>
                <li><Link to="/">我的订阅</Link></li>
                <li><Link to="/">职位邀请</Link></li>
                <li><Link to="/">账号设置</Link></li>
                <li><Link to="/">去企业版</Link></li>
                <li><Link to="/">退出</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      {/* 头部黑色导航end */}
      {/* 头部白色导航 */}
      <div id="lg_hnav">
        <div className="inner clearfix">
          <div className="lg_hnav_l fl">
            <Link to="/" className="lg_logo">
              <h1> </h1>
            </Link>
            <div className="suggestCity">
              <strong>上海站</strong>
              <em>[切换城市]</em>
            </div>
          </div>
          <ul className="lg_hnav_warp fl">
            <li><NavLink to="/home" activeClassName="current">首页</NavLink></li>
            <li><NavLink to="/gongsi" activeClassName="current">公司</NavLink></li>
            <li><NavLink to="/xiaoyuan" activeClassName="current">校园</NavLink></li>
            <li><NavLink to="/yanzhi" activeClassName="current">言职</NavLink></li>
          </ul>
        </div>
      </div>
      {/* 头部白色导航end */}
    </div>
    {/* header end */}
  </>

)

export default Header
