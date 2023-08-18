'use client'

import { useRef, useState } from 'react';
import { TbPlayerPauseFilled, TbPlayerPlayFilled, TbVolume } from 'react-icons/tb';
import style from './MusicPlayer.module.css';

const MusicPlayer = () => {
  const [play, setPlay] = useState<boolean>(false);
  const musicRef = useRef<HTMLAudioElement>(null);
  const MAX: number = 30;

  const sound: string = '/alt_money.mp3'

  const handlerPlay = ():void => {
    if(play){
      musicRef.current?.pause();
      setPlay(false);
    }else{
      musicRef.current?.play();
      setPlay(true);
    }
  }
  const handlerMute = () => {

  }
  const handlerVolume = (event: React.ChangeEvent<HTMLInputElement>):void => {
    const { value } = event.target;
    const volume = Number(value) / MAX;
    if(musicRef.current) {
      musicRef.current.volume = volume;
    }
  }

  return (
    <div className={style.container}>
      <button type='button' onClick={handlerPlay} className={style.play}>
        {
          !play 
          ? <TbPlayerPlayFilled />
          : <TbPlayerPauseFilled />
        }        
      </button>

      <div>
        <TbVolume />
        <input type="range" onChange={handlerVolume} min={0} max={MAX} className={style.rangeInput}/>
      </div>

      <audio src={sound} ref={musicRef} loop/>
    </div>
  )
}

export default MusicPlayer