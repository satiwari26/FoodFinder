import { Typography } from '@mui/material';
import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <Typography variant='h4' color= '#006D82'>
      <h1>About Our Food Bank Application</h1>
      </Typography>
      <Typography variant='h4' color= '#006D82'>
      <p>
        Our Food Bank Application aims to provide a centralized platform for individuals and organizations to contribute to the fight against hunger. We strive to connect those in need with essential food resources and facilitate the generous contributions of donors and volunteers.
      </p>
      <p>
        With our application, users can easily search for nearby food banks, learn about their mission and services, and access information on how to receive assistance or contribute. Our goal is to create a supportive community and ensure that no one goes hungry.
      </p>
      <p>
        Join us in making a difference and help us build a world where everyone has access to nutritious food. Together, we can combat hunger and make a positive impact on the lives of individuals and families in need.
      </p>
      </Typography>
    </div>
  );
};

export default AboutPage;