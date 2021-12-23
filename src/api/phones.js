import axios from 'axios'

const url = process.env.REACT_APP_PHONES_API_URL

const fetchPhones = () => {
  return axios.get(url)
}

export { fetchPhones }