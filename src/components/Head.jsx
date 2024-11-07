import React, { useState } from 'react'
import { hero } from '../assets/assets'
import { brainwave } from '../assets/assets'
import { navigation } from '../constant'
import { useLocation } from 'react-router-dom'
import MenuSvg from '../assets/assets/svg/MenuSvg'
import {HamburgerMenu} from './design/Header'
import Button from './Button'

function Head() {
    const [openNavigation ,setOpenNavigation] = useState(false)
    const pathname= useLocation()
    const HanddleOnclick=()=>{
      if (openNavigation) {
          setOpenNavigation(false)
      }
      else setOpenNavigation(true)
    }
    const handleClick=()=>{
      setOpenNavigation(false)
    }
  return (
    <div className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:backdrop-blur-sm
    lg:bg-n-8/90 ${openNavigation ? 'bg-n-8 ':'bg-n-8/80 backdrop-blur-sm '}`}>   
        <div className=' flex items-center px-5 lg:px-7.5 xl:px-10  max-lg:py-4'>
             <a className='w-[12rem] block' href="#hero">
             <img src={brainwave} alt="brainwave" width={190} height={40} />
             </a>
             <nav className= {`${openNavigation ? 'flex ' :'hidden'}  fixed  top-[5rem] left-0 right-0 lg:static lg:flex lg:mx-auto lg:bg-transparent bg-n-8`}>
                     <div className=' flex flex-col items-center justify-center m-auto lg:flex-row'>
                       {navigation.map((item)=>(
                        <a key={item.id} href={item.url} onClick={handleClick} className={`block  relative font-code uppercase text-2xl text-n-1 hover:text-color-1 ${item.onlyMobile ? 'lg:hidden' :''}
                        px-6 py-6 md:py-8 lg:text-xs lg:font-semibold  ${item.url ===pathname.hash ?'z-2 lg:text-n-1' : 'text-n-1/50'} lg:leading-5 xl:px-12 hover:text-n-1`}>
                            {item.title}
                            
                        </a>
                       ))}
                       <HamburgerMenu/>
                     </div>
             </nav>
             
              <div className={`flex items-center gap-4 `}>
              <a href="" className={`button transition-colors  text-n-4 hover:text-n-1 lg:block 
                hidden `}>
                     singup
                </a>
            <Button className='hidden lg:flex ' href='#login'>
                Sign in
            </Button>
              
              </div>
           
             <Button className={`lg:hidden ml-auto`} onClick={HanddleOnclick}>
             <MenuSvg openNavigation={openNavigation}/>
             </Button>

        </div>
     </div>
  )
}

export default Head