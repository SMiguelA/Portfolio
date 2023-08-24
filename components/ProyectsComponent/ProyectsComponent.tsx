'use client'
/* eslint-disable react/jsx-key */
import ProjectsCard from '@/components/ProyectsCard/ProjectsCard'
import { RootState } from '@/redux/store'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import animalCoffe from '../../imgs/coffe.gif'
import { Projects } from '../../types.d'
import style from './ProyectsComponent.module.css'
import projectInfoEnglish from './projectsInfoEnglish'
import projectInfoSpanish from './projectsInfoSpanish'

const ProyectComponent = () => {

  const language = useSelector((state:RootState) => state.language.value)

  const data : Projects[] = language === 'EN' ? projectInfoEnglish : projectInfoSpanish;

  return (
    <section className={style.container}>
      {
        data.map((info, index) => (
          <ProjectsCard data={info} index={index} key={info.name}/>
        ))
      }
      <Image src={animalCoffe} alt='Coffe' className={style.image}/>
    </section>
  )
}

export default ProyectComponent