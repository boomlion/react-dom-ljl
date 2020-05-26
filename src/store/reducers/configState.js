import thunkMiddleware from 'redux-chunk';
import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from 'react-router-redux'
import history from "./history"
import reducer from "./index";
// history 可以在数据变化的时候doc可以查看相关的操作
const reduxRouterMiddleware = routerMiddleware(history)

const nextReducer = require('./index')
export default function configure(initState) {
  // 是否有开发辅助工具有就开启，没有就是用原生的create
  const create = window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore
  const createdWithMiddleware = applyMiddleware(thunkMiddleware, reduxRouterMiddleware)(create)
  const store = createdWithMiddleware(reducer, initState)
  if (module.hot) {
    module.hot.accept('@reducers', () => {
      store.replaceReducer(nextReducer)
    })
  }
  return store
}