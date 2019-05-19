import axios from "axios"
import {Message} from "element-ui"

// import config from "../config/index"
let instance = axios.create({
  // headers: {'content-type': 'application/json'}
});

// // 添加请求拦截器
instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  return response
}, function (error) {

  if (error.search('Timeout') === -1) {
    return Promise.reject(error);
  } else {
    Message.error('请求连接超时')
  }
});

export default instance

/**
 *  http 请求
 * */
export const test = params => {
  return new Promise((resolve, reject) => {
    instance.post(process.env.API_ROOT+"/api/test", params)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

