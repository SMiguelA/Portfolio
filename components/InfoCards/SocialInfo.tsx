import { BiFile, BiLogoGithub, BiLogoLinkedin, BiMessageAltDetail } from 'react-icons/bi'
import style from './InfoCards.module.css'

const socialMedia = [
  {
    span: 'Linkedin',
    icon: <BiLogoLinkedin />
  },
  {
    span: 'GitHub',
    icon: <BiLogoGithub />
  },
  {
    span: 'Download CV',
    icon: <BiFile />
  },
  {
    span: 'Contact Me',
    icon: <BiMessageAltDetail />
  }
]

const SocialInfo = () => {
  return (
    <div className={style.socialContainer}>
      <div className={style.dataContainer}>

      </div>
      <div className={style.socialMedia}>
        {
          socialMedia.map((option, index) => (
            <div key={index}>
              <>
                {option.icon}
              </>
              <span>{option.span}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SocialInfo