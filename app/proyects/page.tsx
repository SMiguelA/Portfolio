/* eslint-disable */
import ProjectsCard from '@/components/ProyectsCard/ProjectsCard'
import Image from 'next/image'
import animalCoffe from '../../imgs/coffe.gif'
import { Projects } from '../../types.d'
import style from './page.module.css'
import proyecInfo from './proyectsInfo'

const page = () => {

  const data : Projects[] = proyecInfo

  return (
    <section className={style.container}>
      {
        data.map((info, index) => (
          <ProjectsCard data={info} index={index} key={index}/>
        ))
      }
      <Image src={animalCoffe} alt='Coffe' className={style.image}/>
    </section>
  )
}

export default page