import axios from '@/api/axios'

const getData = (count) => {
  return axios.get('/', {
    params: {
      rows: count,
      id: '{number|1000}',
      firstName: '{firstName}',
      lastName: '{lastName}',
      email: '{email}',
      phone: '{phone|(xxx)xxx-xx-xx}',
      address: '{addressObject}',
      description: '{lorem|32}',
      address: '{streetAddress}',
      city: '{city}',
      state: '{usState|abbr}',
      zip: '{zip}',
    }
  })
  .then((response) => response.data)
}

export default {
  getData
}