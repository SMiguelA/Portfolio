import style from './InfoCards.module.css'

const DataSpanish = () => {
  return (
    <div className={style.dataContainer}>
      <div>
        <span>Nombre:</span>
        <span>Miguel Ángel Sierra</span>
      </div>

      <div>
        <span>Edad:</span>
        <span>19</span>
      </div>

      <div>
        <span>Status:</span>
        <span>Relajado</span>
      </div>
      <div className={style.gif}>
      </div>
    </div>
  )
}

export default DataSpanish