import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react"
import Link from "next/link"
import {signIn, signOut, useSession} from "next-auth/client"

export default function Home() {
  const [session, loading] = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!session && (
          <>
          Not signed in <br />
          <button onClick={signIn}>Sign In</button>
          </>
        )}
        {
          session && (
            <>
            Signed in as {session.user.email} <br />
            <div> You can now access the app </div>
            <button onClick={signOut}>Sign out</button>
            </>
          )
        }
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
