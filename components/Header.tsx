import { useEffect, useState } from 'react'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Image from 'next/image'
// import BasicMenu from './BasicMenu'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-gray-800'} flex justify-between p-4 w-full`}>
      <div className='flex items-center space-x-2 md:space-x-10'>
        <Link className='flex p-3 text-cyan-600 text-2xl tracking-tighter' href='/'>
          <h1 className='montserrat italic font-extrabold'>Flow State Swim</h1>
        </Link>
        <ul className='hidden space-x-4 md:flex'>
          <li className='headerLink cursor-default font-semibold text-white hover:text-white'>
            Home
          </li>
          <li className='headerLink'>TV Shows</li>
          <li className='headerLink'>Movies</li>
          <li className='headerLink'>New & Popular</li>
          <li className='headerLink'>My List</li>
        </ul>
      </div>
      <div className='flex items-center space-x-4 text-sm font-light'>
        <SearchIcon className='h-6 text-white' />

        <BellIcon className='h-6 text-white' />

        <Link href='/account'>
          <img src='https://rb.gy/g1pwyx' alt='' className='cursor-pointer rounded' />
        </Link>
      </div>
    </header>
  )
}

export default Header
