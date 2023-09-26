import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Reading() {
  return (
    <>
      <Head>
        <title>{"Things I've Built"}</title>
        <meta name="description" content="Maanav Khaitan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ja1.jpg" />
      </Head>
      <main className="bg-white h-full flex items-center justify-center">
      <div className="flex flex-col min-h-screen main-body">
        <div className="flex flex-col sm:flex-row gap-12 my-36 md:mx-36 mx-8">
        <img src="/ja4.jpeg" className="h-64 w-64" />
        <div>
        <h2 className="text-5xl text-start font-serif">Things I&apos;ve Built</h2>
        <div className="flex flex-row">
        <h2 className="text-md text-start font-serif mt-4">there&apos;s nothing more fun than working with friends to make an idea come to life</h2>
        <a target="_blank" href="https://github.com/MaanavKhaitan" ><h2 className="text-md text-start font-serif text-zinc-500 mt-4 ml-2 underline">[github]</h2></a>
        </div>
        <h2 className="text-xl mt-8 text-start font-serif text-zinc-700"><a target="_blank" href="https://github.com/MaanavKhaitan/weld" className="underline">Weld</a></h2>
        <h2 className="text-lg mt-1 text-start font-serif text-zinc-500">Testnet framework integrating Narwhal/Bullshark&apos;s high-throughput consensus with EVM execution powered by Foundry&apos;s Anvil.</h2>
        <h2 className="text-xl mt-8 text-start font-serif text-zinc-700"><a target="_blank" href="https://ethglobal.com/showcase/traverse-5xy8p" className="underline">Traverse</a></h2>
        <h2 className="text-lg mt-1 text-start font-serif text-zinc-500">Automatically generate security reports for EVM smart contracts, using static analysis.</h2>
        <h2 className="text-xl mt-8 text-start font-serif text-zinc-700"><a target="_blank" href="https://www.covidplasma.in/" className="underline">Covidplasma.in</a></h2>
        <h2 className="text-lg mt-1 text-start font-serif text-zinc-500">India&apos;s first online dashboard to connect COVID-19 patients with plasma donors. Connected 3500+ patients and donors.</h2>
        <h2 className="text-xl mt-8 text-start font-serif text-zinc-700"><a target="_blank" href="https://ethglobal.com/showcase/lilac-waeur" className="underline">Lilac</a></h2>
        <h2 className="text-lg mt-1 text-start font-serif text-zinc-500">Improving crypto governance by enabling DAOs and protocols to reward their most active contributors with voting power.</h2>
        <h2 className="text-xl mt-8 text-start font-serif text-zinc-700"><a target="_blank" href="https://drive.google.com/file/d/1D5neg_swZAK4LKPEskaCmBLJ1oGcThP4/view" className="underline">Outlier-resistant Uniswap price oracle</a></h2>
        <h2 className="text-lg mt-1 text-start font-serif text-zinc-500">Making Uniswap&apos;s TWAP price oracle more outlier-resistant by implementing a winsorized TWAP oracle from scratch.</h2>
        <h2 className="text-xl mt-8 text-start font-serif text-zinc-700"><a target="_blank" href="https://apoyoapp.wixsite.com/apoyo" className="underline">Apoyo</a></h2>
        <h2 className="text-lg mt-1 text-start font-serif text-zinc-500">An iOS app to help Alzheimer&apos;s caregivers remind their loved ones of daily tasks and ensure their safety.</h2>
        <h2 className="text-xl mt-8 text-start font-serif text-zinc-700"><a target="_blank" href="https://apps.apple.com/us/app/beacon-safety/id1106393380" className="underline">Beacon Safety</a></h2>
        <h2 className="text-lg mt-1 text-start font-serif text-zinc-500">An iOS app to alert and send your location to your close contacts when unsafe. Received 2300+ downloads.</h2>
        <h2 className="text-xl mt-8 text-start font-serif text-zinc-700"><a target="_blank" href="https://github.com/MaanavKhaitan/random-walk-music-generator" className="underline">Random Walk Music Generator</a></h2>
        <h2 className="text-lg mt-1 text-start font-serif text-zinc-500">A program to create music using random walks, starting from A and then exploring nearby notes to create a tune. Call this generative AI.</h2>
        <h2 className="text-xl mt-8 text-start font-serif text-zinc-700"><a target="_blank" href="https://devpost.com/software/poachnot" className="underline">PoachNot</a></h2>
        <h2 className="text-lg mt-1 text-start font-serif text-zinc-500">Trying to save animals in wildlife reserves through real-time detection of poachers.</h2>
        </div>
        </div>
      </div>
      </main>
    </>
  )
}
