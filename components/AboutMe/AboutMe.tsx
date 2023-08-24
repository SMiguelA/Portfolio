'use client'
/* eslint-disable */

import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'
import AboutEnglish from './AboutEnglish'
import style from './AboutMe.module.css'
import AboutSpanish from './AboutSpanish'
import CloudShape from './CloudShape'

const AboutMe = () => {

  const language = useSelector((state:RootState) => state.language.value);

  return (
    <>
      <h1>About Me</h1>
      <div className={style.textContainer}>
        {
          language === 'EN'
          ?(
            <AboutEnglish />
          )
          :(
            <AboutSpanish />
          )
        }
      </div>
      <CloudShape />
    </>
  )
}

export default AboutMe