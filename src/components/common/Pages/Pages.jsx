import React from 'react'
import './Pages.css'
import { Pagination } from 'antd';
const Pages = (props) => (
    <div className="item_con_pager">
        <Pagination defaultCurrent={1} total={320} defaultPageSize={16}/>
    </div>


)

export default Pages
