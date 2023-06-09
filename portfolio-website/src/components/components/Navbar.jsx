import React from 'react'
import {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
// import styles from '../../styles';
import {navLinks} from '../../constants'
import {logo,menu,close} from '../../assets';

const Navbar = () => {
  const [active,setActive] = useState('');
  const [toggle,setToggle] = useState(false);

  return (
    <nav className='sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary'>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" 
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0,0);
          }}
        >
          <img alt="logo" src={logo} className='w-9 object-contain'/>
          <p className='text-white text-[18px] font-bold cursor-pointer'>Adithya Nair</p>
        </Link>
       
      </div>
    </nav>
  )
}

export default Navbar