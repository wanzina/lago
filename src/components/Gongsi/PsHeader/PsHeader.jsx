import React from 'react'
import './PsHeader.css'
const PsHeader = (props) => (
    <div className="positionHead">
        <div className="filter-wrapper">
            <ul className="details">
                <li className="workcity">
                    <em data-id="0"></em>
                    <span className="title">公司地点：</span>
                    <a className="active" data-id="0">全国</a>
                    <a data-id="2">北京</a>
                    <a data-id="3">上海</a>
                    <a data-id="215">深圳</a>
                    <a data-id="213">广州</a>
                </li>
                <li className="financing">
                    <em data-id="0"></em>
                    <span className="title">融资阶段：</span>
                    <a className="active" data-id="0" >不限</a>
                    <a data-id="1">未融资</a>
                    <a data-id="2">天使轮</a>
                    <a data-id="3">A轮</a>
                    <a data-id="4">B轮</a>
                    <a data-id="5">C轮</a>
                    <a data-id="6">D轮及以上</a>
                    <a data-id="7">上市公司</a>
                    <a data-id="8">不需要融资</a>
                </li>
                <li className="companyscale">
                    <em data-id="0"></em>
                    <span className="title">公司规模：</span>
                    <a data-id="0" className="active" >不限</a>
                    <a data-id="1">少于15人</a>
                    <a data-id="2">15-50人</a>
                    <a data-id="3">50-150人</a>
                    <a data-id="4">150-500人</a>
                    <a data-id="5">500-2000人</a>
                    <a data-id="6">2000人以上</a>
                </li>
                <li className="industry">
                    <em data-id="0"></em>
                    <span className="title">行业领域：</span>
                    <a data-id="0" className="active">不限</a>
                    <a data-id="1">移动互联网</a>
                    <a data-id="2">电子商务</a>
                    <a data-id="3">金融</a>
                    <a data-id="4">企业服务</a>
                    <a data-id="5">教育</a>
                    <a data-id="6">文化娱乐</a>
                    <a data-id="7">游戏</a>
                    <a data-id="8">O2O</a>
                    <a data-id="9">硬件</a>
                </li>
            </ul>
            <ul className="sub_filter" id="order">
                <li className="clearfix">
                    <div className="item_order fl">
                        <span className="title">排序方式：</span>
                        <a href="javascript:;" className="active btnDefault">默认排序</a>
                        <a className="btnPos">职位数量 ↓</a>
                        <a className="btnView">面试评价数 ↓</a>
                        <a className="btnResume">简历处理率 ↓</a>
                    </div>
                    <div className="nterval_assess fr">
                        <i></i>
                        有面试评价
                    </div>
                </li>
            </ul>
            <ul style={{display: 'none'}}>
                <li>
                    
                </li>
            </ul>
        </div>
    </div>
)

export default PsHeader
