'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BiFolder, BiHomeAlt2, BiUser } from 'react-icons/bi'
import style from './NavBar.module.css'

const navOptions = [
  {
    name: 'Home',
    path: '/',
    icon: <BiHomeAlt2 />
  },
  {
    name: 'About',
    path: '/about',
    icon: <BiUser />
  },
  {
    name: 'Proyects',
    path: '/proyects',
    icon: <BiFolder />
  }
]

const NavBar = () => {

  const route = usePathname();
  const [page, setPage] = useState('/');

  useEffect(() => {
    setPage(route)
  }, [route])

  // console.log(page)
  return (
    <nav className={style.navbar}>
      <ul>
        {
          navOptions.map((option, index) => (
            <li key={index} className={page === option.path ? style.page : style.component}>
              <Link href={option.path}>
                {option.icon}
              </Link>
              <span>{option.name}</span>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default NavBar