import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container} >
      <Head>
        <title>home | ganen.moe</title>
        <meta name="description" content="idk how to add description lulmao" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className='flex h-screen items-center grid-row-2 w-full place-content-stretch pl-44'>
          <div>
            <h1 className='text-on-surface font-normal text-5xl mb-6'>
              <a>ganendra afrasya salsabilla.</a>
            </h1>
            <p className='text-on-surface font-normal'>android engineer, hobbyist game developer, play a lot of rhythm game.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
