import {connect} from 'react-redux';
import UI from './HomeUI';
import action from '@/store/home/action'

const mapStateToProps = (state) =>{
    console.log (state)
    return {
        list:state.homeStore.list
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        requestJobData () {
            dispatch(action.requestJobData())
        }
    }
}

const Home = connect(mapStateToProps,mapDispatchToProps)(UI);

export default Home
