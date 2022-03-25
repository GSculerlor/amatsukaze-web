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
        <div className='flex h-screen items-center w-full place-content-stretch p-4 md:p-6 lg:p-[72px]'>
          <div>
            <h1 className='text-on-surface text-5xl mb-6'>
              <a>(still) under development</a>
            </h1>
            <p className='text-on-surface text-base'>if you see this page, I&apos;m probably still working (or rather too lazy to update) this page. 
            in the meantime, why don&apos;t you check my <a href='https://blog.ganen.moe' className='font-semibold'>blog</a> to read something or maybe 
            check my <a href='https://github.com/GSculerlor' className='font-semibold'>github</a> profile to see what I&apos;m currently working on.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
