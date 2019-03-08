import React from 'react';
import './Jobcard.css'

const Jobcard = ({list}) => (
    <div className="job-list-wrapper">
    
        {console.log(list)}
        <div className="rec_posHotPosition position_list ">
            <div className="recommend_tips">
                <span className="recommend_tips_icon">?</span>
                <em>推荐职位基于你的浏览、投递等行为及简历内容给出~</em>
                <span className="tips re_tips_iknow">我知道了</span>	
                <span className="tips to-modify-resume"><a href="myresume.html">去修改简历</a></span>	
            </div>
         <ul className="position_list_ul clearfix">
             { list.map((item,index) => (
                <li className="position_list_item" key={index}>
                        <div className="pli_top">
                            <div className="pli_top_t clearfix">
                                <div className="position_name fl clearfix">
                                    <h2 className="fl"><a href="#">{item.positionName}</a></h2>
                                    <span className="create-time fl">[{item.createTime}]</span>
                                    <div className="chat_me fl">
                                        
                                    </div>
                                </div>
                                <span className="salary fr">
                                   { item.salary}
                                </span>
                            </div>
                            <div className="pli_top_info">
                                <span>经验1-3年</span>
                                <span>本科</span>
                            </div>
                            <div className="pli_top_lable">
                                <span className="wordCut">{item.positionName}</span>
                            </div>
                        </div>
                        <div className="pli_btm clearfix">
                            <a href="#" className="fl">
                                <img className="company-logo" src={item.companyLogo}/>
                            </a>
                            <div className="pli_btm_right">
                                <div className="company_name ">
                                    <a href="#">{item.companyName}</a>
                                </div>
                                <div className="industry">
                                    <span>移动互联网</span>
                                    <span>不需要融资</span>
                                    <span>{item.city}</span>
                                </div>
                            </div>
                            
                        </div>
                    </li>
               ))}  
            </ul>
        </div> 
    </div>
)

export default Jobcard
