import React from 'react';
import Link from 'next/link';
import { Meow_Script } from '@next/font/google'

const meowScriptFont = Meow_Script({
  subsets:['latin'],
  weight: ['400']
})

const Header = () => {
  return (
    <Link href={'/'}>
    <div className='header-container'>
         <h1 className={`head_text text-center `}>
     <b>FEM</b>BARRI
      <br className='max-md:hidden' />
      <span className={`subtitle ${meowScriptFont.className}`}> Sant Andreu</span>
    </h1>
    </div>
    </Link>
  )
}

export default Header