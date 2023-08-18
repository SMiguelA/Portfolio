/* eslint-disable */

import style from './AboutMe.module.css'
import CloudShape from './CloudShape'

const AboutMe = () => {
  return (
    <>
      
      <h1>About Me</h1>
      <div className={style.textContainer}>
        <p>
          Junior Frontend developer with a passion for creating beautiful and 
          functional user interfaces. When I'm not coding, you can usually find me 
          sipping on a cup of coffee in a relaxing environment.
        </p>
        <p>
          I have experience working with React and Next.js to build dynamic 
          and responsive web applications. I'm always eager to learn and grow, 
          and I'm excited to continue developing my skills as a frontend developer.
        </p>
      </div>
      <CloudShape />
    </>
  )
}

export default AboutMe