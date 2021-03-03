import React from "react";
import { Challenges } from "../components/Challenges";
import { CountDonw } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css'
import { ChallengeBox } from "../components/ChallengeBox";

import { CountDownProvider } from '../contexts/CountDownContext';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
        
      </Head>

      <ExperienceBar/>

      <CountDownProvider>
        <section>
          <div>
            <Profile />
            <Challenges />
            <CountDonw />
          </div>
          <div>
          <ChallengeBox/>
          </div>
        </section>
      </CountDownProvider>
    </div>
  )
}
