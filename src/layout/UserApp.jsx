import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Register from '@/pages/Reg/Reg'
import Common from '@/pages/ZLogin/ZLogin'
import Login from '@/pages/Login/Login'
import Reg from '@/pages/Reg/Reg'

class Com extends Component {
    render(){
        return (
            <>
                <Switch>
                    <Route path='/userapp/register' component ={Register} />
                    <Route path='/userapp/common' component ={Common} />
                    <Route path='/userapp/login' component ={Login} />
                    <Route path='/userapp/reg' component ={Reg} />
                </Switch>
            </>
        )
    }
}

export default Com
