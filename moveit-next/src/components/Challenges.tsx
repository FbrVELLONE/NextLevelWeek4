import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Challenges.module.css'

export function Challenges(){
  const { challengesCompleted } = useContext(ChallengesContext);

  return(
    <div className={styles.completedChallengeContainer}>
      <span>Challenges Completed</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}