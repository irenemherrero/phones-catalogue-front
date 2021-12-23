
import {
  REQUEST_PHONES,
  RECEIVE_PHONES,
  ERROR_FETCHING,
} from './constants'

import { fetchPhones } from '../api/phones'

export const requestPhones = () => ({
  type: REQUEST_PHONES,
})

export const receivePhones = (data) => ({
  type: RECEIVE_PHONES,
  phones: data,
})

export const errorFetching = (error) => ({
  type: ERROR_FETCHING,
  error: error,
})

export const getPhones = (dispatch) => {
  dispatch(requestPhones())
  return fetchPhones()
    .then((res) => {
      dispatch(receivePhones(res.data))
    })
    .catch((err) => dispatch(errorFetching(err.message)))
}