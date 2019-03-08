import axios from 'axios';
import baseUrl from './../baseUrl'

const api = {
    requestJobData () {
        return new Promise((resolve,reject) => {
            axios.get(baseUrl+'/api/positionlist?pageNo=0&pageSize=6')
             .then(data => {
                 console.log(data)
                 resolve(data.data)
             })
             .catch(err => {
                 reject(err)
             })   
        })
    }
}

export default api
