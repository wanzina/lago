import React, { Component } from 'react'
import './Error.css'
class Com extends Component {
    render(){
        return(
            <div id="error">
                <div className="i_error">
                    <img src="/img/blocked_404.png" alt="404" width="100%"/>>
                    <div className="i_logo">
                        <img src="/img/lagou_logo.png" alt="logo" width="100%"/>>
                    </div>
                </div>	
                <p className="tip" id="tipEle">啊哦，出错了，您访问的链接不存在！</p>
                <p className="btn">
                    <a className="green" href="javascript:history.go(-1);">返回上页</a>
                    <a href="http://www.lagou.com">返回首页</a>
                </p>
            </div>
        )


    }

}

export default Com
