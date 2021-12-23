
import {
  REQUEST_PHONES,
  RECEIVE_PHONES,
  ERROR_FETCHING,
  REQUEST_PHONE,
  RECEIVE_PHONE,
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

export const requestPhone = () => ({
  type: REQUEST_PHONE,
})

export const receivePhone = (data) => ({
  type: RECEIVE_PHONE,
  phone: data,
})

export const getPhones = (dispatch) => {
  dispatch(requestPhones())
  return fetchPhones()
    .then((res) => {
      dispatch(receivePhones(res.data))
    })
    .catch((err) => dispatch(errorFetching(err.message)))
}

export const getPhone = (dispatch, id) => {
  dispatch(requestPhone())
  return fetchPhones(id)
    .then((res) => {
      dispatch(receivePhone(res.data))
    })
    .catch((err) => dispatch(errorFetching(err.message)))
}