import React from 'react'
import './Footbar.css'
const Footbar = (props) => (
    <div id="footer">
        <div className="inner_wrap clearfix">
            <div className="footer_module_l fl">
                <a href="#" className="footer_app">
                    <i className="footer_app_icon"></i>下载拉勾app
                    <img  style={{display: 'none'}} src="@/assets/img/CgpFT1lDioCAFqS2AAEeWsD3HHo535.PNG"/>
                </a>
                <a href="#" className="footer_mini">
                    <i className="footer_mini_icon"></i>
                    微信小程序
                    <img  style={{display: 'none'}} src="@/assets/img/lagou-mina-code_d70848a.png"/>
                </a>
                <div className="footer_module_item">
                    <a href="#" className="footer_wechat">
                        <i className="footer_wechat_icon"></i>
                        拉勾微信
                        <img style={{display: 'none'}} src="@/assets/img/qrcode-new_8484b5d.png"/>
                    </a>
                    <a href="#" className="footer_weibo">
                        <i className="footer_weibo_icon"></i>
                        拉勾微博
                    </a>
                </div>
            </div>
            <div className="footer_module_r fl">
                <div className="footer_module_business">
                    <p className="footer_mb_title">企业服务</p>
                    <a href="#">招聘解决方案</a>
                    <a href="#">公司搜索</a>
                    <a href="#">拉勾APP</a>
                </div>
                <div className="footer_module_business">
                    <p className="footer_mb_title">用户帮助</p>
                    <a href="#">帮助中心</a>
                    <a href="#">用户服务协议</a>
                    <a href="#">在线提问</a>
                </div>
                <div className="footer_module_business">
                    <p className="footer_mb_title">联系方式</p>
                    <span>服务热线：4006 2828 35 (9:00 -18:00)</span>
                    <a href="#">企业服务邮箱：cc@lagou.com</a>
                    <a href="#">联系我们</a>
                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="copyright_inner">
                <div className="copyright_main_left ">
                    <span className="copyright_title">
                        <em>@</em>
                        2018 拉勾网
                    </span>
                    <a href="#">京ICP备14023790号-2</a>
                    <a href="#" className="footer_gongan">
                        <i className="footer_lagou_gongan"></i>
                        京公网安备 11010802024043号
                    </a>
                    <div className="footer_lagou_jubao fr">
                        <i className="lagou_jubao"></i>
                        <p>
                            <span>违法和不良信息举报</span><br/>
                            <strong>4006 2828 35</strong>
                        </p>
                    </div>
                </div>
                <i className="footer_lagou_icon"></i>
            </div>
        </div>
    </div>



)

export default Footbar
