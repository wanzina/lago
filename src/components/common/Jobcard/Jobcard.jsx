import React from 'react';
import './Jobcard.css'
const Jobcard = (props) => (
    <div className="job-list-wrapper">
        <div className="rec_posHotPosition position_list ">
            <div className="recommend_tips">
                <span className="recommend_tips_icon">?</span>
                <em>推荐职位基于你的浏览、投递等行为及简历内容给出~</em>
                <span className="tips re_tips_iknow">我知道了</span>	
                <span className="tips to-modify-resume"><a href="myresume.html">去修改简历</a></span>	
            </div>
            <ul className="position_list_ul clearfix">
            <li className="position_list_item">
                    <div className="pli_top">
                        <div className="pli_top_t clearfix">
                            <div className="position_name fl clearfix">
                                <h2 className="fl"><a href="#">WEB前端开发工程师</a></h2>
                                <span className="create-time fl">[2018-09-04]</span>
                                <div className="chat_me fl">
                                    
                                </div>
                            </div>
                            <span className="salary fr">
                                7K-10k
                            </span>
                        </div>
                        <div className="pli_top_info">
                            <span>经验1-3年</span>
                            <span>本科</span>
                        </div>
                        <div className="pli_top_lable">
                            <span className="wordCut">HTML5</span>
                        </div>
                    </div>
                    <div className="pli_btm clearfix">
                        <a href="#" className="fl">
                            <img className="company-logo" src="../img/Cgo8PFT0QCeAfBHsAAAi5SJQRK0027.jpg"/>
                        </a>
                        <div className="pli_btm_right">
                            <div className="company_name ">
                                <a href="#">DigitalX</a>
                            </div>
                            <div className="industry">
                                <span>移动互联网</span>
                                <span>不需要融资</span>
                                <span>上海</span>
                            </div>
                        </div>
                        
                    </div>
                </li>
                
            </ul>
        </div> 
    </div>
)

export default Jobcard
