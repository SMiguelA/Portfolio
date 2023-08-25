'use client'
import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'
import style from './StatsCards.module.css'

const StatsCards = () => {

  const language = useSelector((state: RootState) => state.language.value)

  const cardsInfo = [
    {
      title: language === 'EN' ? 'Years Experience' : 'Años de Experiencia',
      color: '#79ff79',
      textColor: '#000000d8',
      data: '2+'
    },
    {
      title: language === 'EN' ? 'Personal Projects' : 'Proyectos Personales',
      color: '#ce79ff',
      data: '6'
    },
    {
      title: language === 'EN' ? 'Cups of Coffe' : 'Tazas de café',
      color: '#ffba79',
      textColor: '#000000d8',
      data: '120+'
    }
  ]

  return (
    <div className={style.container}>
      {
        cardsInfo.map((info) => (
          <div key={info.title} style={{backgroundColor: info.color, color: info.textColor}} className={style.card}>
            <h2>{info.data}</h2>
            <span>{info.title}</span>
          </div>
        ))
      }
    </div>
  )
}

export default StatsCards