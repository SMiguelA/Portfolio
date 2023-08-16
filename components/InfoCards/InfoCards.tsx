import ImgComponent from './ImgComponent'
import style from './InfoCards.module.css'
import SocialInfo from './SocialInfo'

const InfoCards = () => {
  return (
    <div className={style.container}>
      <ImgComponent />
      <SocialInfo />
    </div>
  )
}

export default InfoCards