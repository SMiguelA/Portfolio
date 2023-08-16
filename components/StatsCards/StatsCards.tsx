import style from './StatsCards.module.css'

const cardsInfo = [
  {
    title: 'Years Experience',
    color: '#79ff79',
    textColor: '#000000d8',
    data: '2+'
  },
  {
    title: 'Personal Projects',
    color: '#ce79ff',
    data: '5'
  },
  {
    title: 'Cups of Coffe',
    color: '#ffba79',
    textColor: '#000000d8',
    data: '120+'
  }
]

const StatsCards = () => {
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