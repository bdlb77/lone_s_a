import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';


const NavStyle= styled.div`
position: fixed;
width: 100vw;
height: 69px;
left: 0px;
top: 0px;
background:  #45544C;


a,
  button {
    padding: 1rem 3rem;
    display: inline-flex;
    align-items: center;
    position: relative;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: normal;
    background: none;
    border: 0;
    color: #DFE2E3;
    font-family: Roboto;
    text-decoration: none;
}
.lone-soldiers{
position: absolute;
height: 69px;
left: 18px;
right: 905px;
top: 2px;
}
.menu-items{
height: 48px;
left: 1047px;
right: 288px;
top: 15px;
float:right;
}

`;

const Navbar = () => (
  <NavStyle>
  <div>
    <Link className="lone-soldiers" href="/">
        <a>For Lone Soldiers By Lone Soldiers.</a>
    </Link>
    <div className= "menu-items">
    <Link href="/">
      <a>About Us</a>
    </Link>
    <Link href="/">
      <a> Hotline Numbers </a>
    </Link>
    <Link  href="/">
      <a> Communities </a>
    </Link>
    </div>

    </div>
  </NavStyle>
);

export default Navbar;