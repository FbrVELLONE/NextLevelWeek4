import { useContext } from 'react';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/CountDown.module.css'

export function CountDonw(){
  const { minutes, seconds, isActive, hasFinished, resetCountDown, startCountDown } = useContext(CountDownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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