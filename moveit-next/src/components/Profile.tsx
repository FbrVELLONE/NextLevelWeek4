import styles from '../styles/components/Profile.module.css'

export function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/FbrVELLONE.png" alt="Fabricio Vellone"/>
      <div>
        <strong>Fabricio Vellone</strong>
        <p>
          <img src="icons/level.svg" alt="levelIcon"/>
          Level 1
        </p>
      </div>
    </div>
  );
}