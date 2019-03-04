import Mock from 'mockjs'
import { userInfo } from './response/userInfo'

Mock.mock('http://localhost:3000/getUserInfo', userInfo)

export default Mock
