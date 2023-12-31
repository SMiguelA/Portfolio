'use client'
import { RootState } from '@/redux/store'
import { BiFile, BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'
import { MdAlternateEmail } from 'react-icons/md'
import { useSelector } from 'react-redux'
import DataEnglish from './DataEnglish'
import DataSpanish from './DataSpanish'
import style from './InfoCards.module.css'

const SocialInfo = () => {

  const language = useSelector((state:RootState) => state.language.value)

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
      span: language === 'EN' ? 'Download CV' : 'Descargar CV',
      icon: <BiFile />,
      path: language === 'EN' ? 'https://drive.google.com/file/d/1z2AvgdgWxZ5RCTokdq9sE5TpxFfHIto5/view?usp=sharing' : 'https://drive.google.com/file/d/1_ijLJIE5M66FEvM_8WkPpQApr01YIiMC/view?usp=sharing'
    },
    {
      span: language === 'EN' ? 'Contact Me' : 'Contactame',
      icon: <MdAlternateEmail />,
      path: 'mailto:sierrabolanosmiguel@gmail.com'
    }
  ]

  return (
    <div className={style.socialContainer}>
      {
        language === 'EN' 
        ?(
          <DataEnglish />
        )
        :(
          <DataSpanish />
        )
      }
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