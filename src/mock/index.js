import Mock from 'mockjs'
import { userInfo } from './response/userInfo'

// devserver proxy设置了代理之后，会导致这里的mock拦截没有效果
Mock.mock('http://localhost:3000/getUserInfo', userInfo)

export default Mock
