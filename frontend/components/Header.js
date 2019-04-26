import React from 'react';
import styled from 'styled-components';
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>

const HeaderDiv= styled.div`

position: fixed;
width: 759px;
height: 246px;
left: 368px;
top: 100px;
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: normal;
text-align: center;
color: #FFFFFF;
z-index:1;
`;

const LargeHeaderStyle= styled.header`
font-size: 80px;
line-height: 112px;

`;

const SmallHeaderStyle= styled.header`
font-size: 50px;
opacity:.6;
`;

const CallButtonStyle=styled.button`
position: relative;
width: 150px;
height: 50px;
background: #027C90;
color: #DFE2E3;
border-radius: 2px;
`;


const Header= () => (
  <HeaderDiv>
<LargeHeaderStyle>
We  Are here for You.
</LargeHeaderStyle>
<SmallHeaderStyle>
    Connect With Us.
</SmallHeaderStyle>
<CallButtonStyle>
    Call Us
</CallButtonStyle>
  </HeaderDiv>
);

export default Header;