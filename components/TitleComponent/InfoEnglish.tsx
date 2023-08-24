/* eslint-disable */

import TypingEffect from '../TypingEffect/TypingEffect'
import ShapesFloating from './ShapesFloating'
import style from './TitleComponent.module.css'

const InfoEnglish = () => {
  return (
    <>
      <ShapesFloating />
      <p>
          ¡Hi 👋!
      </p>
      <p className={style.info}>      
          I'm a Frontend Developer who enjoys taking on new coding challenges and
      </p>
      <TypingEffect words={['Learning', 'Coffe', 'Games', 'Pizza']}/>
    </>
  )
}

export default InfoEnglish