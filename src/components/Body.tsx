import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const Body: React.FC = () => {
  return (
    <div className='ml-80 mr-80 text-center text-black bg-white rounded-[20px] mt-14'>
        <div className='flex items-center ml-36'>
            <div className=' w-54 mt-16 mr-28 '>
                <h4 className='font-bold text-left text-[20px]'>Would you like to create the Store using Facebook Page ? </h4>
            <p className='text-left text-[15px]'>Get a launch directly on your page and unifrom your store with <br/>the same information of your Facebook page</p>
            </div>
            <div className='flex text-center mt-10  border-2 p-5 flex-row rounded-lg border-[#053A67CC]'>
                 <div className='mr-5'>
                <FacebookRoundedIcon color="primary"/>
            </div>
            Create Using my Facebook Page
            </div>
           
        </div>
         <p className='mt-20'>Or</p>
         <div className=' w-54 mt-16 mr-28 ml-32'>
                <h4 className='font-bold text-left text-2xl'>Setup a Fresh my Store</h4>
            <p className='text-left'>You can always connect your Facebook page to your store later.</p>
            </div>
        <div className='mt-20 ml-32 flex'>
          <div className='text-left border-[0.5px] w-[289.84px] h-[47px] pt-2 pl-2 mr-20 rounded-lg border-[#C9C9C9]'>Store Name</div>
          <div className='text-left border-[0.5px] w-[400px] h-[47px] pt-2 pl-2 rounded-lg border-[#C9C9C9]'>Store Business Phone number</div>
        </div>
        <div className='mt-10 ml-32 flex'>
          <div className='text-left border-[0.5px] w-[289.84px] h-[47px] pt-2 pl-2 mr-20 rounded-lg border-[#C9C9C9]'>Store Language</div>
          <div className='text-left border-[0.5px] w-[400px] h-[47px] pt-2 pl-2 rounded-lg border-[#C9C9C9]'>Store Currency</div>
        </div>
        <button className='mt-14 ml-96 bg-[#053A67CC] left-[885px] w-[190px] h-[50px] rounded-[4px] position-absolute text-[14px] text-white'>Create</button>
        <div className='mt-14 mr-[1050px]'>
        En (US) < KeyboardArrowDownRoundedIcon /> 
        </div>
    </div>
  )
}

export default Body