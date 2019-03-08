import React from 'react';
import './Search.css'
const Search = (props) => (
    <div className="contain_header">
        <div className="search_wrapper">
            <div className="search_box">
                <form>
                    <input type="text" className="search_input fl" placeholder="搜索职位、公司或地点" />
                    <input type="submit" className="search_submit fl" value="搜索"/>
                </form>
            </div>
            <div className="pos-guess-wrapper">
                <div className="pos-guess_body" style={{display:'none'}}>
                    <span>猜你要搜：</span>
                    <ul>
                        <li>前端</li>
                        <li>html5前端</li>
                        <li>html5</li>
                        <li>web前端</li>
                        <li>实习</li>
                        <li>开发助理</li>
                    </ul>
                </div>
                
            </div>
            <dl className="hot_search">
               {/* <dt>热门搜索：</dt> */}
               {/* <dd><a href="#">销售</a></dd> */}
                    
            </dl>
        </div>
    </div>




)

export default Search
