import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Social from "../components/Social";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className={styles.container} >
      <Head>
        <title>home | ganen.moe</title>
        <meta name="description" content="idk how to add description lulmao" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className='flex flex-col md:flex-row h-screen items-center justify-center w-full p-4 md:p-6 lg:p-12'>
          <div className='md:flex-1'>
            <Header />
            <Social />
          </div>
          <div className='md:flex-1'/>
        </div>
      </main>
    </div>
  )
}
