import React from 'react'
import './JobTitle.css'
const JobTitle = (props) =>(
    <ul className="jobtab module-tabs">
        <li className="cursor" data-type = "recommendJop">推荐职位</li>
        <li data-type = "hotJob">热门职位</li>
        <li data-type = "newJob">最新职位</li>
    </ul>
)

export default JobTitle
