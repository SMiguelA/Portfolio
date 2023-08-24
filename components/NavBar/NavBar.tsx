'use client'
import { changeEnglish, changeSpanish } from '@/redux/features/counter/counterSlice'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'
import { BiFolder, BiHomeAlt2 } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import style from './NavBar.module.css'

const navOptions = [
  {
    name: 'Home',
    path: '/',
    icon: <BiHomeAlt2 />
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
  const [option, setOption] = useState('EN');
  const dispatch = useDispatch()

  useEffect(() => {
    setPage(route)
  }, [route])



  const handlerLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    if(event.target.value === 'EN'){
      dispatch(changeEnglish())
      setOption('EN')
    }else{
      dispatch(changeSpanish())
      setOption('ES')
    }
  }

  // console.log(page)
  return (
    <nav className={style.navbar}>
      <ul>
        {
          navOptions.map((option, index) => (
            <li key={option.name} className={page === option.path ? style.page : style.component}>
              <Link href={option.path}>
                {option.icon}
              </Link>
              <span>{option.name}</span>
            </li>
          ))
        }
      </ul>
      
      <select onChange={(event) => handlerLanguage(event)} className={style.select}>
          <option value='EN' selected>
            EN
          </option>
          <option value='ES'>
            ES
          </option>
      </select>
    </nav>
  )
}

export default NavBar