import TypingEffect from '../TypingEffect/TypingEffect'
import style from './TitleComponent.module.css'

const TitleComponent = () => {
   return (
      <div className={style.container}>
         <p>
            ¡Hi 👋!
         </p>
         <p className={style.info}>      
            I'm a Frontend Developer who enjoys taking on new coding challenges and
         </p>
         <TypingEffect words={['Team Work.', 'Learning.', 'Console.log', 'Coffe.', 'Games.', 'Pizza.']}/>
      </div>
   )
}

export default TitleComponent