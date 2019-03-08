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
  register(tel,password,code){
    return new Promise((resolve,reject) => {
      axios.post(baseUrl + '/api/register',{tel,password,code}).then(data => {
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  //登陆
  login(tel,password){
    return new Promise((resolve,reject)=>{
      axios.post(baseUrl+'/api/login',{tel,password}).then(data=> {
        resolve(data)
      }).catch(error=>{
        reject(error)
      })
    })
  }
}

export default api