import api from '@/api/home'

const requestJobData = () => (dispatch,getstate) => {
    console.log(1)
    api.requestJobData().then(data => {
        dispatch({type:'CHANGE_LIST_DATA',data})
    })
}

export default {requestJobData} 