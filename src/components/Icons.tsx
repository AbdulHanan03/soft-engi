import React from 'react'
import { Icon } from '@iconify/react';
import { useState } from 'react';

const Icons = ({onIconChange}) => {

  const handleClick = (type) =>{
    onIconChange(type)
  }

  return (
    <div className=' flex flex-row h-16 mt-4 -mb-3 border-t-2 justify-between flex-wrap'>
      
        <div onClick= {() => handleClick('Basic')} className='flex flex-col mt-2 hover:text-red-500'>
        <Icon icon="streamline:home-4"  className='ml-14 hover:text-red-500 size-7 h-12'/>
        <div className='ml-14 cursor-pointer'>Basic</div>
        </div>

        <div onClick= {() => handleClick('Arctic')} className = 'flex flex-col mt-2 hover:text-red-500'>
        <Icon icon="ion:snow-outline" className='mr-8 hover:text-red-500 size-8 h-12'/>
        <div className='cursor-pointer'>Arctic</div>
        </div>  

        <div onClick= {() => handleClick('Lake')} className = 'flex flex-col mt-2 hover:text-red-500'>   
        <Icon icon="ic:sharp-houseboat" className='hover:text-red-500 size-9 h-12'/>
        <div className='cursor-pointer'>Lake</div>
        </div>
        
        <div onClick= {() => handleClick('Garden')} className = 'flex flex-col mt-2 hover:text-red-500'>
        <Icon icon="material-symbols-light:home-and-garden-outline" className='mr-10 hover:text-red-500 size-9 h-12' />
        <div className='cursor-pointer'>Garden</div>
        </div>
       
        <div onClick= {() => handleClick('Free Wifi')} className = 'flex flex-col mt-2 hover:text-red-500'>
        <Icon icon="solar:home-wifi-linear" className='mr-10 hover:text-red-500 size-11 h-12'/>
        <div className='cursor-pointer'>Free Wifi</div>
        </div>
        
        <div onClick= {() => handleClick('Urban')} className = 'flex flex-col mt-2 hover:text-red-500'>
        <Icon icon="material-symbols-light:home-work-outline" className='mr-10 hover:text-red-500 size-9 h-12'/>
        <div className='cursor-pointer'>Urban</div>
        </div>
        
        <div onClick= {() => handleClick('Garage')} className = 'flex flex-col mt-2 hover:text-red-500'>
        <Icon icon="game-icons:home-garage" className='mr-10 hover:text-red-500 size-10 h-12'/>
        <div className='cursor-pointer'>Garage</div>
        </div>
    </div>
  )
}

export default Icons