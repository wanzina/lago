import axios from 'axios';
import baseUrl from '../baseUrl';

const api = {
  // 校验注册状态
  checkPhone(tel) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/api/checkphone?tel=' + tel).then(data => {
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 获取验证码
  getCode(tel){
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/api/codes?tel=' +tel).then(data=>{
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 注册
  register(tel,code,password){
    return new Promise((resolve,reject) => {
      axios.post(baseUrl + '/api/register',{tel,code,password}).then(data => {
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default api