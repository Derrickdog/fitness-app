import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '170px', xs: '40px' }, mt: { sm: '20px', xs: '20px' }, justifyContent: 'none' }} px="20px">
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '128px', height: '128px', margin: '0px 20px' }} />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="center"
        justifyContent="center"
      >
        <Link to="/" className="nav-btn" >HOME</Link>
        <a href="#exercises" className="nav-btn">EXERCISES</a>
      </Stack>
    </Stack>
  )
};

export default Navbar
