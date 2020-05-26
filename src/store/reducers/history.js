import createHashHistory from 'history/lib/createHashHistory'
import { useRouterHistory } from 'react-router'
const history = useRouterHistory(createHashHistory)({})
export default history