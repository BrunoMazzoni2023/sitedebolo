import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

const CakeCard = ({ cake }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      {/* Link para a página de detalhes do bolo */}
      <Link to={`/cakes/${cake.name}`} style={{ textDecoration: 'none' }}>
        <CardMedia
          component="img"
          height="200"
       
          image={cake.image}
          alt={cake.name}
          style={{ cursor: 'pointer' }}
        />
      </Link>
    </Card>
  );
};

export default CakeCard;
