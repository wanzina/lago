import React,{ Component}from 'react';
import './Myresume.css'
import Model1 from '@/components/Myresume/Model1'
class Com extends Component{
    state = { visible1: false }
    showModal1 = () => {
        this.setState({
          visible1: true,
        });
    }
    handleOk1 = (e) => {
        console.log(e);
        this.setState({
          visible1: false,
        });
    }
    handleCancel1 = (e) => {
        console.log(e);
        this.setState({
          visible1: false,
        });
    }
    render(){

        return (
            <div className="myresume">
                <Model1 visible1={this.state.visible1} handleOk1={this.handleOk1} handleCancel1={this.handleCancel1}  />
          	    <div className="container">
                    <div className="my_created clearfix">
                        <div className="mc_myresume_l fl">
                        {/* 	<!--简历头部--> */}
                            <div className="mc_my_head">
                                <div className="privacy_settings">
                                    <span className="privacy_settings_img">
                                        
                                    </span>
                                    <div className="privacy_settings_tip dn">
                                        <p>在这里可以设置屏蔽企业</p>
                                        <span className="privacy_settings_btn">去开启</span>
                                        <span className="privacy_settings_close"></span>
                                    </div>
                                    
                                </div>
                                <div className="mc_top_bg">
                                    <img className="mr_headimg" src="/img/CgqKkViTFa-AfrW-AAXrAM_LOew031.jpg"/>
                                    <img className="opa" src="/img/tou_c3707c7.png"/>
                                    <img className="shadow" style={{display: 'none'}} src="/img/shadow_tx_a482008.png"/>
                                    <div className="mr_headfile"></div>
                                </div>
                                <div className="mr_baseinfo">
                                    <i className="mr_left_bg"></i>
                                    <i className="mr_right_bg"></i>
                                    <div className="mr_my_qr">
                                        <div className="dropdown_menu" style={{display: 'none'}}>
                                            {/* <!--广告位--> */}
                                            <div className="lgad_jsonp">
                                                <img src="/img/Cgp3O1h0rI6AOt76AADBj42OxaE531.PNG"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mr_p_name clearfix">
                                        <span className="mr_edit fr dn">
                                            <i></i>
                                            <em>编辑</em>
                                        </span>
                                        <span className="mr_name">小丸子</span>
                                    </div>
                                    <div className="mr_p_info">
                                        <div className="info_t">
                                            <span className="shenfen">
                                                <i></i>
                                                <em>测试 · 上海众谱伟信金融信息服务有限公司</em>
                                            </span>								
                                        </div>
                                        <div className="info_j">
                                            <span className="base_info">
                                                <i></i>
                                                <em className="s">女</em>
                                                <em className="a">18岁</em>
                                                <em className="x">博士</em>
                                                <em className="j">2年经验</em>
                                                <em className="d">上海</em>
                                            </span>
                                        </div>
                                        <div className="info_b">
                                            <span className="mobile">
                                                <i></i>
                                                <em>18888888888</em>
                                            </span>
                                            <span className="email">
                                                <i></i>
                                                <em>121068@qq.com</em>
                                            </span>
                                        </div>
                                        {/* 模态框1 */}
                                        <span className="mr_edit" onClick={this.showModal1}>
                                            <i></i>
                                            <em>编辑</em>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* <!--简历头部--> */}
                            {/* <!--简历主体--> */}
                            <div className="mr_content clearfix">
                                <div className="item_container_target" id="jobObjective">
                                    <div className="mr_moudle_head clearfix mr_w604">
                                        <div className="mr_head_l fl">
                                            <div className="mr_title">
                                                <span className="mr_title_l"></span>
                                                <span className="mr_title_c">求职意向</span>
                                                <span className="mr_title_r"></span>
                                            </div>
                                        </div>
                                        <div className="mr_head_r fr" data-toggle="modal" data-target="#myModal2">
                                            <i></i>
                                            <em>编辑</em>
                                        </div>
                                    </div>
                                    {/* <!--简历内容--> */}
                                    <div className="mr_moudle_content clearfix mr_w604">
                                        <form action="" method="post" className="dn">
                                        </form>
                                        <ul className="job_objective_list">
                                            <li className="obj_pos_name">
                                                <i></i>
                                                <span>WEB前端</span>
                                            </li>
                                            <li className="obj_job_type">
                                                <i></i>
                                                <span>全职</span>
                                            </li>
                                            <li className="obj_city">
                                                <i></i>
                                                <span>上海</span>
                                            </li>
                                            <li className="obj_salary">
                                                <i></i>
                                                <span>8k-12k</span>
                                            </li>
                                            <li className="obj_info">
                                                <i></i>
                                                <span>积极找工作</span>
                                                <span>／随时</span>
                                            </li>
                                        </ul> 
                                        
                                    </div>
                                </div>
                                <div className="item_container_target" id="selfDescription">
                                    <div className="mr_moudle_head clearfix mr_w604">
                                        <div className="mr_head_l fl">
                                            <div className="mr_title">
                                                <span className="mr_title_l"></span>
                                                <span className="mr_title_c">自我描述</span>
                                                <span className="mr_title_r"></span>
                                            </div>
                                        </div>
                                        <div className="mr_head_r fr" data-toggle="modal" data-target="#myModal3">
                                            <i></i>
                                            <em>编辑</em>
                                        </div>
                                    </div>
                                    <div className="mr_moudle_content clearfix mr_w604">
                                        <form action="" method="post" className="dn">
                                        </form>
                                        <div className="self_des_list">
                                            <div className="mr_self_r">
                                                小丸子是小可爱
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item_container_target" id="workExperience">
                                    <div className="mr_moudle_head clearfix mr_w604">
                                        <div className="mr_head_l fl">
                                            <div className="mr_title">
                                                <span className="mr_title_l"></span>
                                                <span className="mr_title_c">工作经历</span>
                                                <span className="mr_title_r"></span>
                                            </div>
                                        </div>
                                        <div className="mr_head_r fr" data-toggle="modal" data-target="#myModal4">
                                            <i></i>
                                            <em>添加</em>
                                        </div>
                                    </div>
                                    <div className="mr_moudle_content clearfix mr_w604">
                                        <form action="" method="post" className="dn">
                                        </form>
                                        <div className="list_show">
                                            <div className="updatejob_wrap">
                                                <div className="mr_jobe_list">
                                                    <div className="clearfix">
                                                        <div className="mr_content_l fl">
                                                            <div className="l2">
                                                                <h4>上海众谱伟信金融信息服务有限公司</h4>
                                                                <span>运营专员</span>
                                                            </div>
                                                        </div>
                                                        <div className="mr_content_r fr">
                                                            <div className="mr_edit mr_c_r_t">
                                                                <i></i>
                                                                <em>编辑</em>
                                                            </div>
                                                            <span>2017.2</span>
                                                            <span>-</span>
                                                            <span>至今</span>
                                                        </div>
                                                    </div>
                                                    <div className="mr_content_m">
                                                        <p>1、公司网站</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item_container_target" id="educationalBackground">
                                    <div className="mr_moudle_head clearfix mr_w604">
                                        <div className="mr_head_l fl">
                                            <div className="mr_title">
                                                <span className="mr_title_l"></span>
                                                <span className="mr_title_c">教育经历</span>
                                                <span className="mr_title_r"></span>
                                            </div>
                                        </div>
                                        <div className="mr_head_r fr" data-toggle="modal" data-target="#myModal5">
                                            <i></i>
                                            <em>编辑</em>
                                        </div>
                                    </div>
                                    <div className="mr_moudle_content clearfix mr_w604">
                                        <form action="" method="post" className="dn">
                                        </form>
                                        <div className="list_show">
                                                <div className="mr_jobe_list">
                                                    <div className="clearfix">
                                                        <div className="mr_content_l fl">
                                                            <div className="l2">
                                                                <h4>齐鲁工业大学</h4>
                                                                <span>本科 · 生物技术及应用</span>
                                                            </div>
                                                        </div>
                                                        <div className="mr_content_r fr">
                                                            <div className="mr_edit mr_c_r_t">
                                                                <i></i>
                                                                <em>编辑</em>
                                                            </div>
                                                            <span>2012</span>
                                                            <span>-</span>
                                                            <span>2016</span>
                                                        </div>
                                                    </div>
                                                    <div className="mr_content_m">
                                                        <p>1、公司网站</p>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="mc_myresume_r">
                            
                        </div>
                    </div>
                    
                </div>
            </div>


        )
    }
}

export default Com
