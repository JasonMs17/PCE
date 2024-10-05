"use client"

import styles from './Navbar.module.css'
import NavbarLinks from './NavbarLinks'
import Toggle from './Toggle'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <div className='fixed z-50 p-5 w-screen border-t-2 border-white/20 h-20 rounded-t-[20px] bottom-0 lg:hidden bg-black/20 backdrop-blur-[10px]'>
        <NavbarLinks/>
      </div>

      <div className={`fixed z-10 flex w-screen h-20 text-white items-center justify-between px-5 lg:px-20 bg-[#000]/20 text-lg dark:bg-[#fff]/20 backdrop-blur-[10px]`}>
        <div>
          <Link href={'/'}>
            <Image
              src="/Logo.png"
              width={30}
              height={30}
              alt="logo"
              />
          </Link>
        </div>
        <div className='hidden lg:flex'>
          <NavbarLinks/>
        </div>
        <div className='flex gap-5 items-center justify-center'>
          <Toggle />
        {/* <Link href={"/event-registration"}> */}
          <div className={`py-2.5 px-5 font-bold rounded-[100px]  ${styles.link_bg}`}>
            Register
          </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar