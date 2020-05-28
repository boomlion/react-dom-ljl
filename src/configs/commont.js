// 异步请求走redux方法
export const createAjaxAction = (createdApi, startAction, endAction) => (request = {}, resolve, reject, config) => (dispatch) => {
  if (startAction) dispatch(startAction({ req: request, res: {} }))
  const _resolve = (response) => {
    if (endAction) dispatch(endAction({ req: request, res: response }))
    if (resolve) resolve(response)
  }
  return createdApi(request, _resolve, reject, config)
}
export const isLogin = (nextState, replaceState) => {
  if (nextState.location.query && nextState.location.query.ticket) { // 如果url自带ticket
    sessionStorage.setItem('token', 'ticket')
  }
  const token = sessionStorage.getItem('token')
  if (!token) { // 没有token，那就返回首页
    replaceState('/login')
  }
}