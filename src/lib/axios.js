import axios from 'axios'
import { baseURL } from '@/config'
class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        // set commmon headers...
      }
    }
    return config
  }
  // 注册全局拦截器
  interceptors (instance) {
    // 请求处理之前
    instance.interceptors.request.use(config => {
      // 请求之前处理一些逻辑，比如加一些loading
      // alert('请求前')

      // 这里必须返回config
      return config
    }, error => {
      return Promise.reject(error)
    })

    // 请求完成之后
    instance.interceptors.response.use(res => {
      // 请求完成之后，需要处理的逻辑，通常处理一些数据格式
      // alert('请求完成')

      // const { data, status } = res
      // return { data, status }
      return res
    }, error => {
      return Promise.reject(error)
    })
  }

  request (options) {
    // 每次发送请求创建一个axios实例
    const instance = axios.create()

    // 添加拦截器
    this.interceptors(instance)

    // 合并内置config和外面传进来的config
    options = Object.assign(this.getInsideConfig(), options)

    // 返回实例
    return instance(options)
  }
}

export default HttpRequest
