import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import App from '@/layout/App';
import UserApp from '@/layout/UserApp'
import * as serviceWorker from './serviceWorker';
import '@/index.css'//公共
import '@/assets/css/normalize.css'//样式重置
//import 'antd/dist/antd.css'//ant-ui css
import Error from '@/pages/Error/Error'
import store from '@/store'
import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <Switch>
            <Route path='/userapp' component = {UserApp}/>
            <Route path='/'  component = {App}/>
            <Route component = {Error}/>
        </Switch>
    </Router>
    </Provider>
 , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
