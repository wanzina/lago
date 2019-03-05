import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import Home from '@/pages/Home/Home'
import Gongsi from '@/pages/Gongsi/Gongsi'
import Mylist from '@/pages/Mylist/Mylist'
import Myresume from '@/pages/Myresume/Myresume'
import Xiaoyuan from '@/pages/Xiaoyuan/Xiaoyuan'
import Yanzhi from '@/pages/Yanzhi/Yanzhi'
import Header from '@/components/common/Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header></Header>
          <Switch>
            <Route path='/home' component={Home}  />
            <Route path='/gongsi' component={Gongsi}  />
            <Route path='/mylist' component={Mylist}  />
            <Route path='/myresume' component={Myresume}  />
            <Route path='/xiaoyuan' component={Xiaoyuan}  />
            <Route path='/yanzhi' component={Yanzhi}  />
            <Redirect path='/' to='/home'/>
          </Switch>
      </div>
    );
  }
}

export default App;
