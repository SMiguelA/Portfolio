'use client'
/* eslint-disable */

import type { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'
import InfoEnglish from './InfoEnglish'
import InfoSpanish from './InfoSpanish'
import style from './TitleComponent.module.css'

const TitleComponent = () => {

   const language = useSelector((state: RootState) => state.language.value);
   

   return (
      <div className={style.container}>
         {
            language === 'EN'
            ?(
               <InfoEnglish />
            )
            :(
               <InfoSpanish />
            )
         }
      </div>
   )
}

export default TitleComponent