import React,{ Component}from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import './Reg.css'
class Com extends Component{

    render(){

        return (
            <div id="reg">
                <header className="sso_header">
                    <a className="logo" href="#"></a>
                </header>
                <section className="content_box clearfix">
                    <div className="register_type worker fl">
                        <h3>找工作</h3>
                        <h4>专注互联网职业机会</h4>
                        <div className="worker_image">
                            
                        </div>
                        <div className="btn">
                            <Link to="/userapp/common" >去找工作</Link>
                        </div>
                    </div>
                    <div className="divider fl">
                        
                    </div>
                    <div className="register_type hr fl">
                        <h3>招人</h3>
                        <h4>互联网人都在拉勾</h4>
                        <div className="hr_image">
                            
                        </div>
                        <div className="btn">
                            <a href="#" >我要招人</a>
                        </div>
                    </div>
                </section>
                <footer className="page_footer">
                    <p>已有账号，请<a href="#">登录</a></p>
                </footer>
            </div>


        )
    }
}

export default Com
