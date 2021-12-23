import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CustomCard, CustomImage, OverflowText } from './phoneCard.style'
import { Link } from 'react-router-dom';

const imageDir = process.env.REACT_APP_IMAGES_DIR

const PhoneCard = ({ data: { description, color, imageFileName, manufacturer, name, price, processor, ram, screen, id } }) => {
  return (
    <Link to={`/phones/${id}`}>
      <CustomCard variant="outlined">
        <CardContent>
          <CustomImage src={`${imageDir}/${imageFileName}`} alt={name} />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {manufacturer.toUpperCase()}
          </Typography>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {`${price} €`}
          </Typography>
          <Typography sx={{ mb: 1 }} color="text.secondary">
            {color.toUpperCase()}
          </Typography>
          <Typography sx={{ mb: 0.2 }} color="text.secondary">
            Processor: {processor}
          </Typography>
          <Typography sx={{ mb: 0.2 }} color="text.secondary">
            RAM: {ram}
          </Typography>
          <Typography sx={{ mb: 0.5 }} color="text.secondary">
            Screen: {screen}
          </Typography>
          <OverflowText variant="body2">
            {description}
          </OverflowText>
        </CardContent>
      </CustomCard>
    </Link>
  );
}

export default PhoneCard;
