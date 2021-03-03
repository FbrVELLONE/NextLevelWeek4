import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const hasChallengeActive = true;

  return(
    <div className={styles.challengeBoxContainer}>
      {hasChallengeActive? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" alt="Body icon"/>
            <strong>New Challenge</strong>
            <p>Stand up and do a walk for 3 minutes</p>
          </main>

          <footer>
            <button
             type="button"
             className={styles.challengeFailedButton}
            >
              Failed
            </button>
            <button
             type="button"
             className={styles.challengeSucceededButton}
            >
              Completed
            </button>
          </footer>
        </div>
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