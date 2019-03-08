import React,{ Component } from 'react'
import './Login.css'
class Com extends Component {

    render(){
        return(
            <div id="login">
                <header className="sso_header">
                    <a className="logo" href="#"></a>
                </header>
                <section className="content_box clearfix">
                    <div className="left_area fl">
                        <div className="form_header">
                            <ul className="clearfix">
                                <li className="fl active">密码登录</li>
                                <li className="fr">验证码登录</li>
                            </ul>
                            <span className="tab_active"></span>
                        </div>
                        <div className="form_body">
                            <form >
                                <div className="input_item">
                                    <input type="text" className="input_white" id="loginName"  placeholder="请输入常用手机号/邮箱" />
                                    <span className="input_tips" style={{display: 'none'}}>请输入已验证手机/邮箱</span>
                                </div>
                                <div className="input_item">
                                    <input type="password" className="input_white" id="loginPsd" placeholder="请输入密码" />
                                </div>
                                <div className="input_item clearfix">
                                    <a href="#" className="forgot_pwd">忘记密码？</a>
                                </div>
                                <div className="input_item login_btn">
                                    <input type="submit" className="btn_green" id="submit_btn" value="登  录" />
                                </div>
                            </form>
                        </div>
                        <div className="form_body">
                            <form style={{display: 'none'}}>
                                <div className="input_item clearfix">
                                    <span className="area_code">0086</span>
                                    <input type="text" className="input_white"  placeholder="请输入常用手机号" />
                                    <span className="input_tips" style={{display: 'none'}}>请输入已验证手机</span>
                                </div>
                                <div className="input_item">
                                    <div className="input_group  clearfix">
                                        <input type="text" className="input_white fl" placeholder="请输入验证码" />
                                        <input type="button" className="btn fr"  value="获取验证码" />
                                    </div>
                                </div>
                                <div className="input_item login_btn">
                                    <input type="submit" className="btn_green"  value="登&nbsp录" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="divider fl">
                        
                    </div>
                    <div className="right_area fl">
                        <h5>还没有账号：</h5>
                        <a href="common.html"  className="register_now">立即注册</a>	
                        <h5>使用以下账号立即登陆:</h5>
                        <ul className="vender_login  clearfix">
                            <li><a href="#" className="vender_icon icon_sina"></a></li>
                            <li><a href="#" className="vender_icon icon_wechat"></a></li>
                            <li><a href="#" className="vender_icon icon_qq"></a></li>
                            <li><a href="#" className="vender_icon icon_baidu"></a></li>
                        </ul>
                        
                    </div>
                </section>
		
            </div>
        )
    }

}

export default Com
