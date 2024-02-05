import axios from '@/utils/axios'

export const login = (data) => {
  return axios({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
