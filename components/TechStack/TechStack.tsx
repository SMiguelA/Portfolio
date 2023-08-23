'use client'

import { useState } from 'react';
import techStack from '../../utils/techSkillsData';
import style from './TechStack.module.css';

interface techData {
  name: string,
  icon: JSX.Element,
  color: string
}

const TechStack = () => {

  const [data, setData] = useState<Array<techData>>(techStack);
  const [isHovered, setIsHovered] = useState<number>(-1);

  const handleMouseEnter = (index: number) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(-1);
  };

  return (
    <>
      {
        data.map((item, index) => (
          <div 
            key={item.color} 
            style={{color: isHovered === index ? item.color : '#b6b6b6', 
                    border: `1px solid ${isHovered === index ? item.color : '#b6b6b6'}` }}
            className={style.container}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))
      }
    </>
  )
}

export default TechStack