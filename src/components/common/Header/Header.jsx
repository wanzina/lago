import React from 'react';
import {NavLink, Link} from 'react-router-dom'


import './Header.css'
const Header = (props) => (
   
            <>
              {/* header */}
                <div id="lg_header">
                    {/* 头部黑色导航 */}
                    <div id="lg_hbar">
                        <div className="inner clearfix">
                            <div className="lg_hbar_l fl">
                                <a href="#" className="lg_app">拉勾app</a>
                                <a href="#" className="lg_os">进入企业版</a>
                            </div>
                            <ul className="lg_hbar_r fr">
                                <li><a href="#" className="msg_dropdown">消息</a></li>
                                <li><Link to="/myresume">我的简历</Link></li>
                                <li><a href="#">投递箱</a></li>
                                <li><a href="#">收藏夹</a></li>
                                <li className="user_dropdown">
                                    <span className="unick bl">用户名</span>
                                    <em className="triangle_down_gray"></em>
                                    <ul style={{display: 'none'}}>
                                        <li><a href="javascript:;">我的订阅</a></li>
                                        <li><a href="#">职位邀请</a></li>
                                        <li><a href="#">账号设置</a></li>
                                        <li><a href="#">去企业版</a></li>
                                        <li><a href="#">退出</a></li>
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
                                <a href="javascript:void(0)" className="lg_logo">
                                    <h1> </h1>
                                </a>
                                <div className="suggestCity">
                                    <strong>上海站</strong>
                                    <em>[切换城市]</em>
                                </div>
                            </div>
                            <ul className="lg_hnav_warp fl">
                                <li><NavLink to="/home" activeClassName="current">首页</NavLink></li>
                                <li><NavLink to="/gongsi"  activeClassName="current">公司</NavLink></li>
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
