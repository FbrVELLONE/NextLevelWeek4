import styles from '../styles/components/Challenges.module.css'

export function Challenges(){
  return(
    <div className={styles.completedChallengeContainer}>
      <span>Desafios Completos</span>
      <span>5</span>
    </div>
  );
}