import React,{ Component}from 'react';
import './Home.css'
import Search from '@/components/Home/Search/Search'
import Menu from '@/components/Home/Menu/Menu'
import Slider from '@/components/Home/Slider/Slider'
import JobTitle from '@/components/Home/JobTitle/JobTitle'
import Gscard from '@/components/common/Gscard/Gscard'
import Jobcard from '@/components/common/Jobcard/Jobcard'
import Partner from '@/components/Home/Partner/Partner'
import GgTitle from '@/components/common/GgTitle/GgTitle'
import LoadmoreBtn from '@/components/common/LoadmoreBtn/LoadmoreBtn'

class Com extends Component{
    componentDidMount(){
        console.log(this.props.requestJobData())
        this.props.requestJobData()
    }
    render(){

        return (
            <>
                {/* 头部搜索 */}
                <Search></Search>
                <div className="contain_body">
                    <div className="clearfix">
                        <Menu></Menu>
                        <Slider></Slider>
                        
                    </div> 
                    {/*热门岗位 */}
                    <JobTitle></JobTitle>
                    <Jobcard list={this.props.list}>{console.log(this.props.list)}</Jobcard>
                    <LoadmoreBtn src="/mylist"/>
                    {/* 热门公司 */}
                    <GgTitle title="热门公司"/>
                    <Gscard></Gscard>
                    <LoadmoreBtn src="/gongsi"/>
                    {/* 回到顶部 */}
                    <a href="#" className="backtop"></a>
                    {/* 友情链接 */}
                    <GgTitle title="友情链接"/>
                    <Partner></Partner>
                </div>     
            
            </>


        )
    }
}

export default Com
