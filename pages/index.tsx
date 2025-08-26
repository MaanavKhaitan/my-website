import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Hi, I'm Maanav."}</title>
        <meta name="description" content="Maanav Khaitan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ja1.jpg" />
      </Head>
      <main className="bg-white lg:h-screen flex items-center justify-center">
          <div className="lg:grid lg:grid-rows-2 lg:grid-cols-3 grid py-24 sm:py-36 sm:px-36 gap-12">
          <div className="container">
            <img src="/ja1.jpg" className="h-64 w-64" />
            <h2 className="centered text-5xl text-start font-serif">{"Hi, I'm Maanav."}</h2>
          </div>
          <div className="container">
            <img src="/ja2.jpeg" className="h-64 w-64" />
            <h2 className="centered text-xl text-start font-serif">I&apos;m currently working on <a target="_blank" href="https://infinityvm.xyz" className="underline">Infinity</a>, a new blockchain.</h2>
          </div>
          <div className="container">
            <img src="/ja6.jpeg" className="h-64 w-64" />
            <h2 className="centered text-xl text-start font-serif">I like <Link href="/investments" className="underline">investing in my friends.</Link></h2>
          </div>
          <div className="container">
            <img src="/ja10.webp" className="h-64 w-64" />
            <h2 className="centered text-xl text-start font-serif">I write some of my thoughts <a target="_blank" href="https://maanav.writeas.com/" className="underline">here</a>, and I try to be funny on <a target="_blank" href="https://twitter.com/MaanavKhaitan" className="underline">Twitter</a>.</h2>
          </div>
          <div className="container">
            <img src="/ja11.jpeg" className="h-64 w-64" />
            <h2 className="centered text-xl text-start font-serif">I love making <Link href="/things" className="underline">fun things</Link> with friends, creating <Link href="/art" className="underline">art</Link>, and I&apos;m trying to <Link href="/reading" className="underline">read more</Link>.</h2>
          </div>
          <div className="container">
            <img src="/ja8.jpeg" className="h-64 w-64" />
            <h2 className="centered text-xl text-start font-serif">I may have spent way too much time on this personal website.</h2>
          </div>
          </div>
      </main>
    </>
  )
}
