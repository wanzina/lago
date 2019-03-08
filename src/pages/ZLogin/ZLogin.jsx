import React,{ Component}from 'react';
import Lheader from '@/components/Login/Lheader/Lheader' 
import Lfooter from '@/components/Login/Lfooter/Lfooter' 
import Lcon from '@/components/Login/Lcon/Lcon'
class Com extends Component{
    
    render(){
        console.log(this.props)
        return (
            <>
                <Lheader/>
                <Lcon { ...this.props }/>
                <Lfooter/>
            </>


        )
    }
}

export default Com
