import style from './InfoCards.module.css'

const DataEnglish = () => {
  return (
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
  )
}

export default DataEnglish