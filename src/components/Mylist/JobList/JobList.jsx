import React from 'react';
import './JobList.css'
const JobList = (props) => (
    <ul className="recommend_list">
        <li className="rec_item">
            <div className="clearfix"> 
                <div className="rec_item_l">
                    <p className="row">
                        <a href="#">
                            <span className="posName g3">前端工程师</span>
                            <em className="posAdd g3">[上海·松江区 ]</em>
                        </a>
                        <span className="posDate">2018-11-20</span>
                    </p>
                    <p className="row">
                        <span className="salary">10K-15K</span>
                        <em className="experience">3-5年/不限</em>
                    </p>
                </div>
                <div className="rec_item_r clearfix">
                    <div className="coLeft fl">
                        <p className="row">
                            <a href="#" className="coName g3">找革网</a>
                        </p>
                        <p className="row">
                            <span className="coDetaile">电子商务/天使轮</span>
                        </p>
                    </div>
                    <div className="coLogo fl">
                        <a href=""><img src="/img/CgoB5ludLZ2AHwwgAAAQybmQmSQ323.JPG"/></a>
                    </div>
                    
                </div>
            </div>
            
            <div className="rec_item_b clearfix">
                <div className="pos_welfare">
                    <span>技能培训</span>
                    <span>节日礼物</span>
                    <span>带薪年假</span>
                </div>
                <div className="coadv">
                    “弹性工作制,团队氛围好,福利待遇好,发展空间大”
                </div>
                
            </div>
        </li>

    </ul>
)

export default JobList
