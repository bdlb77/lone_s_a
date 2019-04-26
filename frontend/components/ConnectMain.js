import React from 'react';
import styled from 'styled-components';

const MainStyle= styled.div`
position: absolute;
width: 100vw;
height: 829px;
left: 0px;
right: 0%;
bottom: 0%;
top: 69px;
background:url('https://i2.wp.com/www.ywamdenver.org/wp-content/uploads/2018/07/rob-bye-125309-unsplash.jpg?ssl=1');
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center; 
background-size: cover;
`;

const ConnectMain = () => (
  <MainStyle/>
);

export default ConnectMain;