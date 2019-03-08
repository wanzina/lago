import React, { Component } from 'react';
import './JobDetail.scss'

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "新媒体编辑"
    }
  }

  render() {
    return (
      <div className="jobdetail">
        <div className="position-head">
          <div className="position-content">

            <div className="position-content-l">
              <div className="job-name" title="新媒体编辑">
                <div className="company">yestone.com招聘</div>
                <span className="name">新媒体编辑</span>
                <div className="marEdit">
                </div>
              </div>
              <dd className="job_request">
                <p>
                  <span className="salary">6k-9k </span>
                  <span>/上海 /</span>
                  <span>经验1年以下 /</span>
                  <span>大专及以上 /</span>
                  <span>全职</span>
                </p>
                <ul className="position-label clearfix">
                  <li className="labels">广告营销</li>
                  <li className="labels">媒体</li>
                  <li className="labels">文案</li>
                  <li className="labels">策划</li>
                  <li className="labels">广告</li>
                  <li className="labels">图片编辑</li>
                </ul>
                <p className="publish_time">1天前&nbsp; 发布于拉勾网</p>
              </dd>
            </div>

            <div className="position-content-r clearfix">
              <div className="position-deal clearfix">
                <div className="jd_collection  job-collection "><i className="icon-glyph-hollow-star"> </i>收藏</div>
                <div className="resume-deliver">
                  <a rel="nofollow" className="send-CV-btn s-send-btn fr">投个简历</a>
                </div>
              </div>
              <div className="jl">
                <span>在线简历</span>
                <span>上传附件</span>
              </div>
            </div>

          </div>
        </div>
        <div className="container clearfix">

          <div className="content_l fl">
            <dl className="job_detail" id="job_detail">
              <dt className="clearfix join_tc_icon">
              </dt>
              <dd className="job-advantage">
                <span className="advantage">职位诱惑：</span>
                <p>五险一金,带薪年假,节日福利,定期体检</p>
              </dd>
              <dd className="job_bt">
                <h3 className="description">职位描述：</h3>
                <div className="job-detail">
                  工作职责
                  <br />>1. 了解陆金所的业务，完成相关人工智能服务的后台开发；
                  <br />2. 利用陆金所的机器学习平台，开发和维护相关的机器学习模型，以满足业务需要，并跟进模型的部署和维护；
                  <br />3. 关注人工智能方面的新技术，参与金融知识图谱，NLP，深度学习、大规模图计算等平台的建设；
                  <br />任职要求
                  <br />1. 本科及以上学历，计算机相关教育背景，985 211学校背景；
                  <br />2. 1~3年<a className="jd-ad" href="https://kaiwu.lagou.com/course/courseInfo.htm?courseId=1&amp;sid=3-Java-1551872803888" target="_blank" rel="nofollow" data-ad="3" data-lg-tj-id="1kcw" data-lg-tj-no="idnull" data-lg-tj-cid="31551872803888" data-lg-tj-content="Java">Java</a>开发经验，熟悉Java常用框架，并对框架特性及原理有一定了解
                  <br />3. 熟悉微服务开发框架，有大规模微服务开发经验的优先；
                  <br />4. 熟悉MySQL数据库，掌握一种以上非关系型数据库，如redis、es、neo4j等；
                  <br />5. 强悍的系统设计和编码能力，追求优雅的设计和优秀的代码质量；
                  <br />6. 有以下经验者优先：
                  <br />a) 熟悉hadoop，spark，spark streaming等分布式并行处理技术，并有相关性能调优经验
                  <br />b) 了解机器学习算法，有算法模型实现并调优经验的优先
                  <br />c) 有知识图谱、NLP实际项目经验者优先
                </div>
              </dd>
            </dl>
          </div>

          <div className="content_r">
            <dl className="job_company" id="job_company">
              <dt>
                <a>
                  <img class="b2" src="//www.lgstatic.com/thumbnail_160x160/i/image/M00/66/AB/CgpFT1mnc9qAW5utAAAZPTBrPD4069.png" width="96" height="96" alt="上海阅文信息技术有限公司" />
                </a>
              </dt>
              <dd>
                <ul class="c_feature">
                  <li>
                    领域：移动互联网
                  </li>

                  <li>
                    规模：上市公司
                  </li>

                  <li>
                    团队：500-2000人
                  </li>

                  <li>
                    <a>公司主页</a>
                  </li>
                </ul>
              </dd>
            </dl>

            {/* 相似职位 */}

            <h2>相似职位</h2>
            <ul className="xs">
              <li>
                <div className="zw-l">
                  <img src="http://www.lgstatic.com/i/image2/M00/29/A5/CgoB5lonbTqAYc1-AAA8VcJWWdY611.png" />
                </div>
                <div className="zw-r">
                  <p className="zname">交互设计师</p>
                  <p className="sellary">15k-20k</p>
                  <p className="info">上海小牛科技有限公司</p>
                </div>
              </li>
              <li>
                <div className="zw-l">
                  <img src="http://www.lgstatic.com/i/image2/M00/29/A5/CgoB5lonbTqAYc1-AAA8VcJWWdY611.png" />
                </div>
                <div className="zw-r">
                  <p className="zname">交互设计师</p>
                  <p className="sellary">15k-20k</p>
                  <p className="info">上海小牛科技有限公司</p>
                </div>
              </li>
              <li>
                <div className="zw-l">
                  <img src="http://www.lgstatic.com/i/image2/M00/29/A5/CgoB5lonbTqAYc1-AAA8VcJWWdY611.png" />
                </div>
                <div className="zw-r">
                  <p className="zname">交互设计师</p>
                  <p className="sellary">15k-20k</p>
                  <p className="info">上海小牛科技有限公司</p>
                </div>
              </li>
              <li>
                <div className="zw-l">
                  <img src="http://www.lgstatic.com/i/image2/M00/29/A5/CgoB5lonbTqAYc1-AAA8VcJWWdY611.png" />
                </div>
                <div className="zw-r">
                  <p className="zname">交互设计师</p>
                  <p className="sellary">15k-20k</p>
                  <p className="info">上海小牛科技有限公司</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

}

export default Detail
