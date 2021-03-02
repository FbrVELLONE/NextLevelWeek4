import { useState, useEffect } from 'react';
import styles from '../styles/components/CountDown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function CountDonw(){
  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time/60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountDown(){
    setIsActive(true);
  }

  function resetCountDown(){
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0){
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }else if (isActive && time === 0){
      setIsActive(false);
      setHasFinished(true);
    }
  }, [isActive, time]);

  return(
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      
      {hasFinished ? (
        <button disabled className={styles.startCountDownButton}>
          Cycle Finished!
        </button>
      ) : (
        <>
          {isActive ? (
            <button type="button" className={`${styles.startCountDownButton} ${styles.startCountDownButtonActive}`} onClick={resetCountDown}>
              Restart
            </button>
          ): (
            <button type="button" className={styles.startCountDownButton} onClick={startCountDown}>
              Click Here to Start!
            </button>
          )}
        </>
      )}
    </div>
  );
}