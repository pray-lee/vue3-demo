import axios from './index'
export const userInfo = () => {
  return axios.request({
    url: '/getUserInfo'
  })
}
