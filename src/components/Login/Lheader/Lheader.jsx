import React from 'react'
import './Lheader.css'
const Lheader = (props) => (
    <div className="lheader">
        <div className="header_border"></div>
        <div className="header_bg clearfix">
            <img className="logo fl" src="/img/logo-slogan_6187040.png"/>
            <div className="hd_right fr">
                <a className="show_qrcode_app" href="#">
                    <img className="icon_app" src="/img/icon-app_bf9763f.png"/>
                    <span>拉勾APP</span>
                    <img className="qrcode_app" style={{display:'none'}} src="/img/qrcode-new_8484b5d.png"/>
                </a>
                <a className="link_login" href="login.html">
                    <span>去登录></span>
                </a>
            </div>
        </div>
    </div>
)

export default Lheader
