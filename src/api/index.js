import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
// import store from '@/store'

/**
 * 假定返回数据格式
 * res.data 返回的数据
 * res.code 返回的自定义校验码(不等于http状态码) 0 -成功 1 -失败 -1 -鉴权失败,重新登录
 * res.msg 返回的消息
 */

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // 跨域请求仍然携带cookies
  timeout: 5000 // request timeout
})

// 请求拦截
service.interceptors.request.use(config => {
    // 通常在这里加上token信息
    // if (store.getters.token) {
    //   config.headers['X-Token'] = getToken()
    // }
    return config
  },
  error => {
    // do something with request error
    console.error('Error is', error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(response => {
    const res = response.data // 获取数据
    // 接口失败
    if (res.code !== 0) {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 重新登录
      if (res.code === -1) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
            // 清除当前的token, 刷新页面
            //   store.dispatch('user/resetToken').then(() => {
            //     location.reload()
            //   })
        })
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.error('Eoor is', error) // for debug
    Message({
      message: error.msg,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
