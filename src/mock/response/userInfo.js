import Mock from 'mockjs'
export const userInfo = (options) => {
  console.log(options)
  const template = {
    // 这里就是mock的模拟数据生成规, 规则地址： https://github.com/nuysoft/Mock/wiki/Syntax-Specification
  }
  return Mock.mock(template)
}
