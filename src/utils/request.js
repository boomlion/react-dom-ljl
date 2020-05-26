import axios from 'axios'

const service = axios.create({
  timeout: 2000
})
// service.interceptions.request.use(
//   config => {
//     config
//   }
// )