import styled from 'styled-components'
import Skeleton from '@mui/material/Skeleton';

export const LoadingPageContainer = styled.div`
  height: calc(100vh - 80px);
  width: calc(100% - 40px);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const CustomSkeleton = styled(Skeleton)`


`;

