import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import tabList from './tabList'
const rootReducer = combineReducers({
  routing,
  config: (state = {}) => state,
  ...tabList
})
export default rootReducer