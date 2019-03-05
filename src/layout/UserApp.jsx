import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Register from '@/pages/Reg/Reg'
import Login from '@/pages/Login/Login'

class Com extends Component {
    render(){
        return (
            <>
                <Switch>
                    <Route path='/userapp/register' component ={Register} />
                    <Route path='/userapp/login' component ={Login} />
                </Switch>
            </>
        )
    }
}

export default Com
