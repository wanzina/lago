import React,{ Component}from 'react';
import Gsbanner from '@/components/Gongsi/Gsbanner/Gsbanner'
import PsHeader from '@/components/Gongsi/PsHeader/PsHeader'
import Gscard from '@/components/common/Gscard/Gscard'
import Pages from '@/components/common/Pages/Pages'
import './Gongsi.css'


class Com extends Component{

    render(){

        return (
            <>
            <Gsbanner/>
            <div id="content-container">
                <div id="company_list_container">
                    {/* 分类 */}
                    <PsHeader/>
                    <Gscard/>
                    <Pages/>
                </div>
            
            </div>
            </>


        )
    }
}

export default Com
