import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import api from '@/api/userapp/users';
import { notification } from 'antd';
import './Login.css'
class Com extends Component {
  constructor(props){
    super (props);
    this.getTel= this.getTel.bind(this);
    this.getPassword=this.getPassword.bind(this);
    this.logBtn=this.logBtn.bind(this)
    this.state={
      tel:'',
      password: ''
    }
  }

  // 弹窗显示
  openNotificationWithIcon = (type) => {
    if (type === 'success') {
      notification[type]({
        message: '登陆成功',
        description: '欢迎：' + this.state.tel,
        duration: 4
      })
    } else if (type === 'error') {
      notification[type]({
        message: '登陆失败',
        description: '用户名或密码错误',
        duration: 4
      })
    } else if (type === 'info') {
      notification[type]({
        message: '您的验证码（10秒后消失）',
        description: this.state.code,
        duration: 10
      })
    }
  };

  getTel(event){
    this.setState({
      tel: event.target.value
    })
  }

  getPassword(event){
    this.setState({
      password: event.target.value
    })
  }

  logBtn(){
    api.login(this.state.tel,this.state.password).then(data => {
      if(data.data.data===1){
        this.openNotificationWithIcon('success')
        localStorage.setItem('isLogin','ok')
        localStorage.setItem('user',this.state.tel)
        this.props.history.push('/')
      }else{
        this.openNotificationWithIcon('error')
      }
    })
  }
  
  render() {
    console.log(this)
    return (
      <div id="login">
        <header className="sso_header">
          <a className="logo" href="#"></a>
        </header>
        <section className="content_box clearfix">
          <div className="left_area fl">
            <div className="form_header">
              <ul className="clearfix">
                <li className="fl active">密码登录</li>
                <li className="fl active">验证码登陆</li>
              </ul>
              <span className="tab_active"></span>
            </div>
            <div className="form_body">
              <>
                <div className="input_item">
                  <input type="text" className="input_white" id="loginName" onChange={this.getTel} placeholder="请输入常用手机号/邮箱" />
                  <span className="input_tips" style={{ display: 'none' }}>请输入已验证手机/邮箱</span>
                </div>
                <div className="input_item">
                  <input type="password" className="input_white" id="loginPsd" onChange={this.getPassword} placeholder="请输入密码" />
                </div>
                <div className="input_item clearfix">
                  <a href="#" className="forgot_pwd">忘记密码？</a>
                </div>
                <div className="input_item login_btn">
                  <input type="submit" className="btn_green" id="submit_btn" value="登  录" onClick={this.logBtn} />
                </div>
              </>
            </div>
            
          </div>
          <div className="divider fl">

          </div>
          <div className="right_area fl">
            <h5>还没有账号：</h5>
            <Link to='/userapp/common' className="register_now">立即注册</Link>
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
