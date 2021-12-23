import * as React from 'react';
import { LoadingPageContainer } from './loadingPage.style'
import Skeleton from '@mui/material/Skeleton';

const SKELETON_NUMBER = 10

const LoadingPage = () => {
  const getSkeletons = () => {
  let skeletons = []
  for(let i = 0; i < SKELETON_NUMBER; i++) {
    skeletons.push(<Skeleton key={i} height={40}/>) 
  }
  return skeletons
}
  return (
    <LoadingPageContainer>
      {getSkeletons()}
    </LoadingPageContainer>
  );
}

export default LoadingPage;
