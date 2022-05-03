import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const Header2: React.FC = () => {
  return (
    <div className='bg-[#053A67CC] w-25  h-20 rounded-full text-center  text-3xl text-white flex'>
    <div className='  bg-[#FFE27A] h-20 rounded-full  text-center w-20 flex items-center justify-center'>
        < HomeRoundedIcon color="primary"  sx={{ fontSize: 40 }} />
    </div>
    <p className='p-5'>Now , Pick a plan that's right for your Business </p>
</div>
  )
}

export default Header2