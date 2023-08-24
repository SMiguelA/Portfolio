import TypingEffect from '../TypingEffect/TypingEffect'
import ShapesFloating from './ShapesFloating'
import style from './TitleComponent.module.css'

const InfoSpanish = () => {
  return (
    <>
      <ShapesFloating />
      <p>
          ¡Hola 👋!
      </p>
      <p className={style.info}>
          Soy desarrollador Frontend que le gusta experimentar nuevos desafios de codigo y 
      </p>
      <TypingEffect words={['Aprender', 'el Café', 'los Juegos', 'la Pizza']}/>
    </>
  )
}

export default InfoSpanish