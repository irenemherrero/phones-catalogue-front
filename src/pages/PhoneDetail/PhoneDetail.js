import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getPhone } from '../../store/actions'
import PhoneDetailCard from './components/PhoneDetailCard/PhoneDetailCard';
import LoadingPage from '../LoadingPage/LoadingPage'

const PhoneDetail = () => {
  const { id } = useParams()
  const { isFetching, phone, error } = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    getPhone(dispatch, id)
  }, [])
  
  return (
    <>
    {isFetching && (
      <LoadingPage/>
    )}
    {!isFetching && phone && (
      <PhoneDetailCard data={phone} />
    )}
    {error && (
      <p>error</p>
    )}
    </>
  );
}

export default PhoneDetail;
