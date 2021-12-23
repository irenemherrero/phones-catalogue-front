import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPhones } from '../../store/actions'
import LoadingPage from '../LoadingPage/LoadingPage'
import PhoneCard from './components/PhoneCard/PhoneCard'
import { CardsListContainer } from './phonesList.style'

const PhonesList = () => {
  const { isFetching, phones, error } = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    getPhones(dispatch)
  }, [])

  return (
    <>
    {isFetching && (
      <LoadingPage/>
    )}
    {!isFetching && phones.length && (
      <CardsListContainer>
        {phones.map(phone => (
          <PhoneCard data={phone} key={phone._id}></PhoneCard>
        ))}
      </CardsListContainer>
    )}
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
