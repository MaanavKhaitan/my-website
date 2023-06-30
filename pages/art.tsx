import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://i.imgur.com/uXmwFSo.png',
    thumbnail: 'https://i.imgur.com/uXmwFSo.png',
  },
  {
    original: 'https://i.imgur.com/yEPsFlO.png',
    thumbnail: 'https://i.imgur.com/yEPsFlO.png',
  },
  {
    original: 'https://i.imgur.com/MmFEaKU.png',
    thumbnail: 'https://i.imgur.com/MmFEaKU.png',
  },
  {
    original: 'https://i.imgur.com/gG7DEU0.png',
    thumbnail: 'https://i.imgur.com/gG7DEU0.png',
  },
  {
    original: 'https://i.imgur.com/WJYy6Ou.png',
    thumbnail: 'https://i.imgur.com/WJYy6Ou.png',
  },
  {
    original: 'https://i.imgur.com/LOoaw4O.jpg',
    thumbnail: 'https://i.imgur.com/LOoaw4O.jpg',
  },
  {
    original: 'https://i.imgur.com/5mpSTB0.jpg',
    thumbnail: 'https://i.imgur.com/5mpSTB0.jpg',
  },
];

const inter = Inter({ subsets: ['latin'] })

export default function Art() {
  return (
    <>
      <Head>
        <title>{"My Art"}</title>
        <meta name="description" content="Maanav Khaitan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ja1.jpg" />
      </Head>
      <main className="bg-white h-full flex items-center justify-center">
      <div className="flex flex-col min-h-screen main-body">
        <div className="flex flex-col sm:flex-row gap-12 my-36 ml-8 sm:ml-36">
        <img src="/ja8.jpeg" className="h-64 w-64" />
        <div>
        <h2 className="text-5xl text-start font-serif">My Art</h2>
        <h2 className="text-md text-start font-serif mt-4">art is fun</h2>
        <div className="mt-8 sm:mr-24 w-screen sm:w-3/5">
        <ImageGallery items={images} />
        </div>
        </div>
        </div>
      </div>
      </main>
    </>
  )
}
