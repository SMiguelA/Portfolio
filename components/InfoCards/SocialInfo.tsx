import { BiFile, BiLogoGithub, BiLogoLinkedin, BiMessageAltDetail } from 'react-icons/bi'
import style from './InfoCards.module.css'

const socialMedia = [
  {
    span: 'Linkedin',
    icon: <BiLogoLinkedin />,
    path: 'https://www.linkedin.com/in/miguel-angel-sierra-bolanos/'
  },
  {
    span: 'GitHub',
    icon: <BiLogoGithub />,
    path: 'https://github.com/SMiguelA'
  },
  {
    span: 'Download CV',
    icon: <BiFile />,
    path: '#'
  },
  {
    span: 'Contact Me',
    icon: <BiMessageAltDetail />,
    path: '#'
  }
]

const SocialInfo = () => {
  return (
    <div className={style.socialContainer}>
      <div className={style.dataContainer}>
        <div>
          <span>Name:</span>
          <span>Miguel Angel Sierra</span>
        </div>

        <div>
          <span>Age:</span>
          <span>19</span>
        </div>

        <div>
          <span>Status:</span>
          <span>Chilling out</span>
        </div>
        <div className={style.gif}>
        </div>
      </div>
      <div className={style.socialMedia}>
        {
          socialMedia.map((option, index) => (
            <div key={option.path}>
              <a href={option.path} target={option.path !=='#' ? '_balnk' : '_self'}>
                {option.icon}
              </a>
              <span>{option.span}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SocialInfo