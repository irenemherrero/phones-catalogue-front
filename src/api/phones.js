import axios from 'axios'

const phonesUrl = process.env.REACT_APP_PHONES_API_URL

const fetchPhones = id => {
  let url = phonesUrl
  if (id) url = `${phonesUrl}/${id}`
  return axios.get(url)
}

export { fetchPhones }