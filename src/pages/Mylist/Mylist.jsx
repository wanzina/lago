import React,{ Component}from 'react';
import './Mylist.css'
import Rectib from '@/components/common/Rectib/Rectib'
import JobList from '@/components/Mylist/JobList/JobList'
import Pages from '@/components/common/Pages/Pages'
class Com extends Component{

    render(){
        return (
            <div className="container clearfix">
                <div className="contain_l">
                    <div className="recommend_job">
                        <Rectib/>{/* 推荐标题 */}
                        <JobList></JobList>
                        <Pages/>
                    </div>
                </div>
            </div>


        )
    }
}

export default Com
