import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPhones } from '../../store/actions'
import LoadingPage from '../LoadingPage/LoadingPage'
// import PhoneCard from './components/PhoneCard/PhoneCard'

const PhonesList = () => {
  const { isFetching, phones, error } = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    getPhones(dispatch)
  }, [])

  return (
    <>
    {/* {isFetching && (
      <LoadingPage/>
    )} */}
    {/* {!isFetching && phones.length && (
      phones.map(phone => (
        <PhoneCard data={phone}></PhoneCard>
      ))
    )} */}
    {!isFetching && !phones.length && (
      <p> no phones</p>
    )}
    {error && (
      <p>error</p>
    )}

    </>
  );
}

export default PhonesList;
