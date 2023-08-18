'use client'
import { motion } from 'framer-motion'
import style from './AboutMe.module.css'
 
const CloudShape = () => {
  return (
    <>
      <motion.div 
        className={style.figModel2}
        animate={{
          y:[2, -3, 2]
        }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
      ></motion.div>
  
      <motion.div 
        className={style.figModel1}
        animate={{
          y:[-4, 3, -4]
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
      ></motion.div>
    </>
  )
}

export default CloudShape