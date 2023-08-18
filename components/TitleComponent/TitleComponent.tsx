/* eslint-disable */

import TypingEffect from '../TypingEffect/TypingEffect'
import ShapesFloating from './ShapesFloating'
import style from './TitleComponent.module.css'

const TitleComponent = () => {
   return (
      <div className={style.container}>
         <ShapesFloating />
         <p>
            ¡Hi 👋!
         </p>
         <p className={style.info}>      
            I'm a Frontend Developer who enjoys taking on new coding challenges and
         </p>
         <TypingEffect words={['Learning', 'Coffe', 'Games', 'Pizza']}/>
      </div>
   )
}

export default TitleComponent