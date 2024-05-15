import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CakeDetail = ({ cake }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Card sx={{ maxWidth: 600, marginBottom: '20px' }}>
        <CardMedia
          component="img"
          height="300"
          image={cake.image}
          alt={cake.name}
        />
      </Card>
      <Typography variant="h4" gutterBottom>
        {cake.name}
      </Typography>    
      <Typography variant="body1" dangerouslySetInnerHTML={{ __html: cake.description }} />
    </div>
  );
};

export default CakeDetail;
