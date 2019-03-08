import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Lcon.css';
import api from '@/api/userapp/users';
import { notification } from 'antd';

class Lcon extends Component {

  constructor(props) {
    super(props)
    this.getTel = this.getTel.bind(this)
    this.regBtn = this.regBtn.bind(this)
    this.getCode = this.getCode.bind(this)
    this.code = this.code.bind(this)
    this.password = this.password.bind(this)
    this.state = {
      tel: '',
      password: '',
      code: '',
      msg: '获取验证码',
      disabled: 'disabled'
    }
  }

  // 手机号
  getTel(event) {
    if (/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(event.target.value)) {
      this.setState({
        tel: event.target.value,
        disabled: ''
      })
    } else {
      this.setState({
        disabled: 'disabled'
      })
    }
  }
  // 获取验证码
  getCode() {
    console.log('触发获取验证码')
    // 检查是否注册过
    api.checkPhone(this.state.tel).then(data => {
      // 未注册--开启计时器--发送验证码
      if (data.data.data === 0) {
        this.setState({
          disabled: 'disabled'
        })
        var timer = null;
        let time = 30
        timer = setInterval(() => {
          time -= 1;
          this.setState({
            msg: time + '秒后重新获取'
          })

          if (time < 1) {
            clearInterval(timer)
            this.setState({
              msg: '获取验证码',
              disabled: ''
            })
          }

        }, 1000)

        api.getCode(this.state.tel).then(data => {
          this.setState({
            code: data.data.code
          })

          this.openNotificationWithIcon('info')
        })
      } else if (data.data.data === 1) {
        this.openNotificationWithIcon('error')
      }
    })
  }
  // 弹窗显示
  openNotificationWithIcon = (type) => {
    if (type === 'success') {
      notification[type]({
        message: '注册成功！',
        description: '用户：' + this.state.tel,
        duration: 4
      })
    } else if (type === 'error') {
      notification[type]({
        message: '用户已存在',
        description: '该手机号已注册过，请直接登陆',
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

  // 密码
  password(event) {
    this.setState({
      password: event.target.value
    })
  }

  // 获取用户输入的验证码
  code(event) {
    this.setState({
      code: event.target.value
    })
  }

  // 注册按钮
  regBtn() {
    console.log(this)
    api.register(this.state.tel, this.state.password, this.state.code).then(data => {
      if (data.data.data === 1) {
        this.openNotificationWithIcon('success')
        this.props.history.push('/userapp/login')
      }
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    console.log(this)
    return (
      <div className="middle">
        <div className="contain clearfix">
          <div className="lp_left fl">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img className="one_1" src="/img/common/three-1_81cd4d1.png" />
                  <img className="one_2" src="/img/common/three-1_81cd4d1.png" />
                  <img className="one_3" src="/img/common/three-4_6994cf6.png" />
                  <img className="one_4" src="/img/common/two_5_8393a8c.png" />
                  <img className="one_5" src="/img/common/two_5_8393a8c.png" />
                  <img className="one_6" src="/img/common/three-4_6994cf6.png" />
                  <img className="one_7" src="/img/common/two_1_3f0e9b5.png" />
                  <img className="one_8" src="/img/common/two_1_3f0e9b5.png" />
                  <img className="one_9" src="/img/common/two_1_3f0e9b5.png" />
                  <img className="one_10" src="/img/common/two_4_23a365f.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="lp_login fr">
            <div className="tab">
              <i></i>
              <span>注册拉勾</span>
            </div>
            <form>
              <ul>
                <li>
                  <span className="area_code">0086</span>
                  <input type="text" className="input_white" id="registerName" placeholder="请输入常用手机号" onChange={this.getTel} />
                  <span className="input_tips" style={{ display: 'none' }}>请输入已验证手机</span>
                </li>
                <li>
                  <span className="area_code">密码</span>
                  <input type="text" className="input_white" id="registerName" placeholder="请输入密码" onChange={this.password} />
                  <span className="input_tips" style={{ display: 'none' }}>请输入正确的密码</span>
                </li>
                <li className="coderli">
                  <div className="input_group  clearfix">
                    <input type="text" className="input_white fl" id="password" onChange={this.code} placeholder="请输入验证码" />
                    <input type="button" className="btn fr" disabled={this.state.disabled} value={this.state.msg} onClick={this.getCode} />
                  </div>
                </li>
              </ul>
              <span className="submitbtn" id="submitbtn" onClick={this.regBtn}>立即注册，获得高薪机会</span>
              <div className="lp_agreeNotice_box">
                <p>注册代表你已同意<a>「拉勾用户协议」</a></p>
              </div>

            </form>
            <div className="login_btn">
              <Link to="/userapp/login" href="login.html">已有帐号，直接登录</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Lcon
