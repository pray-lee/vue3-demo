// 持续化存储
export default store => {
  console.log('store初始化')
  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  store.subscribe((mutation, state) => {
    console.log(mutation, state)
    console.log('提交了mutations')
    localStorage.state = JSON.stringify(state)
  })
}