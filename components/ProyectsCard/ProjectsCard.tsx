/* eslint-disable */
import { Projects } from '@/types.d'
import { BiLogoGithub } from 'react-icons/bi'
import style from './ProjectsCard.module.css'

const ProyectsCard = ({ data, index } : { data:Projects, index:number }) => {

  const backgroundImage = {
    backgroundImage: `url(${data.img.src})`
  }

  return (
    <div className={style.container} key={index} style={backgroundImage}>
      <h2 className={style.title}>{data.name}</h2>
      <div className={style.infoCont}>
        <div className={style.mediaCont}>
          <h2>{data.name}</h2>
          <a href={data.repoURL} target='_blank'>
            <BiLogoGithub />
          </a>
        </div>
        <div className={style.techStack}>
          {
            data.techStack.map((technology, index) => <span key={index}>{technology}</span>)
          }
        </div>
        <p>
          {data.description}
        </p>
      </div>
    </div>
  )
}

export default ProyectsCard