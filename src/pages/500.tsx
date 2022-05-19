import Head from 'next/head'
import Link from 'next/link'

export default function Default404() {
  return (
    <div>
      <Head>
        <title>500 server side error | ganen.moe</title>
        <meta name="description" content="idk how to add description lulmao" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='min-h-full'>
        <div className='flex h-screen items-center w-full place-content-stretch p-4 md:p-6 lg:p-[72px]'>
          <div>
            <h1 className='text-on-surface text-5xl mb-6'>
              <a>500 server-side error</a>
            </h1>
            <p className='text-on-surface text-base'>shit went wrong eh? what about go <Link href="/"><a className='font-semibold'>back</a></Link>?</p>
          </div>
        </div>
      </main>
    </div>
  )
}
