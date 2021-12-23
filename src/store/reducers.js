import {
  REQUEST_PHONES,
  RECEIVE_PHONES,
  ERROR_FETCHING,
  REQUEST_PHONE,
  RECEIVE_PHONE,
} from './constants'

const initialState = {
  isFetching: false,
  phones: [],
  error: null,
  phone: null,
}

const phonesReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PHONES:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_PHONES:
      return {
        ...state,
        isFetching: false,
        phones: action.phones,
      }
    case ERROR_FETCHING:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case REQUEST_PHONE:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_PHONE:
      return {
        ...state,
        isFetching: false,
        phone: action.phone,
      }
    default:
      return state
  }
}

export { phonesReducer }