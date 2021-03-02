import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const hasChallengeActive = true;

  return(
    <div className={styles.challengeBoxContainer}>
      {hasChallengeActive? (
        <div></div>
      ): (
        <div className={styles.challengeNotActive}>
        <strong>Finish a cycle to receive one Challenge</strong>
        <p>
          <img src="icons/level-up.svg" alt="LevelUp Icon"/>
          Keep finishing to level up!
        </p>
      </div>
      )}
    </div>
  );
}