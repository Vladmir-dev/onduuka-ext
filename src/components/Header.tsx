import React from 'react'
import { Icon } from '@iconify/react';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';



const Header: React.FC = ( ) => {
  return (
    <div className='bg-[#053A67CC] w-[1050px] ml-[398px]   h-20 rounded-full text-center  text-3xl text-white flex'>
        <div className='  bg-white h-20 rounded-full  text-center w-20 flex items-center justify-center'>
        < StorefrontRoundedIcon color="primary"  sx={{ fontSize: 40 }} />
        </div>
        <p className='p-5'>Hello, Let's quickly finish setting up your Store</p>
    </div>
  )
}

export default Header