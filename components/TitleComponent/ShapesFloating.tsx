'use client'

import { motion } from 'framer-motion';
import style from './TitleComponent.module.css';

const ShapesFloating = () => {
  return (
    <>
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
        className={style.figModel3}
        animate={{
          y:[4, -3, 4]
        }}
        transition={{
          repeat: Infinity,
          duration: 4
        }}
      ></motion.div>
    </>
  )
}

export default ShapesFloating