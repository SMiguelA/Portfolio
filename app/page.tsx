import AboutMe from '@/components/AboutMe/AboutMe'
import InfoCards from '@/components/InfoCards/InfoCards'
import MusicPlayer from '@/components/MusicPlayer/MusicPlayer'
import StatsCards from '@/components/StatsCards/StatsCards'
import TechStack from '@/components/TechStack/TechStack'
import TitleComponent from '@/components/TitleComponent/TitleComponent'
import style from './page.module.css'

export default function Home() {
  return (
    <main className={style.container}>
      <section className={style.FLfirstItem}>
        <TitleComponent />
        <StatsCards />
      </section>

      <section className={style.FLsecondItem}>
        <InfoCards />
        <MusicPlayer />
      </section>

      <section className={style.SLfirstItem}>
        <TechStack />
      </section>

      <section className={style.SLSecondItem}>
        <AboutMe />
      </section>
    </main>
  )
}
