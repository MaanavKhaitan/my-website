import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi, I'm Maanav.</title>
        <meta name="description" content="Maanav Khaitan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ja1.jpg" />
      </Head>
      <main className="bg-white lg:h-screen flex items-center justify-center">
          <div className="lg:grid lg:grid-rows-2 lg:grid-cols-3 grid py-36 px-36 gap-12">
          <div className="container">
            <img src="/ja1.jpg" className="h-64 w-64" />
            <h2 className="centered text-5xl text-start font-serif">Hi, I'm Maanav.</h2>
            </div>
            <img src="/ja2.jpeg" className="h-64 w-64" />
            <img src="/ja6.jpeg" className="h-64 w-64" />
            <img src="/ja10.webp" className="h-64 w-64" />
            <img src="/ja11.jpeg" className="h-64 w-64" />
            <img src="/ja8.jpeg" className="h-64 w-64" />
          </div>
      </main>
    </>
  )
}
