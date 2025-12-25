import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Reading() {
  return (
    <>
      <Head>
        <title>{"Investments"}</title>
        <meta name="description" content="Maanav Khaitan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ja1.jpg" />
      </Head>
      <main className="bg-white h-full flex items-center justify-center">
      <div className="flex flex-col min-h-screen main-body">
        <div className="flex flex-col sm:flex-row gap-12 my-36 mx-8">
        <img src="/ja6.jpeg" className="h-64 w-64" />
        <div>
        <h2 className="text-5xl text-start font-serif text-black">Investments</h2>
        <ul className="list-disc mt-8">
  <li className="ml-8 font-serif text-black mt-2"><a href="https://seqholdings.com/" className="underline" target="_blank" rel="noopener noreferrer">Sequence Holdings</a></li>
  <li className="ml-8 font-serif text-black mt-2"><a href="https://sorellalabs.xyz/" className="underline" target="_blank" rel="noopener noreferrer">Sorella Labs</a></li>
  <li className="ml-8 font-serif text-black mt-2"><a href="https://appliedcompute.com/" className="underline" target="_blank" rel="noopener noreferrer">Applied Compute</a></li>
  <li className="ml-8 font-serif text-black mt-2"><a href="https://www.endeavor.ai/" className="underline" target="_blank" rel="noopener noreferrer">Endeavor</a></li>
  <li className="ml-8 font-serif text-black mt-2"><a href="https://ats.rippling.com/singularity-defense/jobs" className="underline" target="_blank" rel="noopener noreferrer">Singularity Defense</a></li>
  <li className="ml-8 font-serif text-black mt-2"><a href="https://www.forbes.com/sites/charliefink/2025/08/20/vigil-labs-ai-raises-57-million-to-build-bionic-traders/" className="underline" target="_blank" rel="noopener noreferrer">Vigil</a></li>
  <li className="ml-8 font-serif text-black mt-2"><a href="https://robostrategy.co/" className="underline" target="_blank" rel="noopener noreferrer">Robostrategy</a></li>
  </ul>
        </div>
        </div>
      </div>
      </main>
    </>
  )
}
