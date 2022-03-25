import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Default404() {
  return (
    <div className={styles.container} >
      <Head>
        <title>404 not found | ganen.moe</title>
        <meta name="description" content="idk how to add description lulmao" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className='flex h-screen items-center w-full place-content-stretch p-4 md:p-6 lg:p-[72px]'>
          <div>
            <h1 className='text-on-surface text-5xl mb-6'>
              <a>404 not found</a>
            </h1>
            <p className='text-on-surface text-base'>idk what you're trying to do, but you're in the wrong place. what about go <a href='/' className='font-semibold'>back</a>?</p>
          </div>
        </div>
      </main>
    </div>
  )
}
