import styled from 'styled-components'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export const CustomImage = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  display:block;
  margin:auto;
`;

export const CustomCard = styled(Card)`
  width: 300px;
  margin: 20px;
  cursor: pointer;
`;


export const OverflowText = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;


