import React from 'react'
import { Link } from 'react-router-dom'
import './LoadmoreBtn.css'
const LoadmoreBtn = (props) => (
    <Link to={props.src} className="look_more">查看更多</Link>
)

export default LoadmoreBtn
