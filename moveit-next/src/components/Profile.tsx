import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile(){
  const { level } = useContext(ChallengesContext);

  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/FbrVELLONE.png" alt="Fabricio Vellone"/>
      <div>
        <strong>Fabricio Vellone</strong>
        <p>
          <img src="icons/level.svg" alt="levelIcon"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}