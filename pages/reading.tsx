import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Reading() {
  return (
    <>
      <Head>
        <title>{"Reading List"}</title>
        <meta name="description" content="Maanav Khaitan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ja1.jpg" />
      </Head>
      <main className="bg-white h-full flex items-center justify-center">
      <div className="flex flex-col min-h-screen main-body">
        <div className="flex flex-col sm:flex-row gap-12 my-36 mx-8">
        <img src="/ja1.jpg" className="h-64 w-64" />
        <div>
        <h2 className="text-5xl text-start font-serif text-black">My Reading List</h2>
        <h2 className="text-md text-start font-serif mt-4 text-black">reading is fun, but gotta keep myself accountable</h2>
        <h2 className="text-xl mt-8 text-start font-serif text-zinc-500">what I&apos;m reading now:</h2>
        <ul className="list-disc">
  <li className="ml-8 font-serif text-black mt-2"><i>The First Connect</i> - Pooja Misra Khaitan (it&apos;s my mom&apos;s book!)</li>
  </ul>
  <h2 className="text-xl mt-12 text-start font-serif text-zinc-500">books that have changed the way I think:</h2>
  <ul className="list-disc">
  <li className="ml-8 font-serif text-black mt-2"><i>Design as Art</i> - Bruno Munari</li>
  <li className="ml-8 font-serif text-black mt-2"><i>Anthropomorphics: An Originary Grammar of the Center</i> - Dennis Bouvard</li>
  <li className="ml-8 font-serif text-black mt-2"><i>Mastering Ethereum</i> - Andreas M.A. Antonopoulos and Gavin Wood</li>
  <li className="ml-8 font-serif text-black mt-2"><i>My Gita</i> - Devdutt Pattanaik</li>
  <li className="ml-8 font-serif text-black mt-2"><i>The Rust Programming Language</i> - Steve Klabnik and Carol Nichols</li>
  <li className="ml-8 font-serif text-black mt-2"><i>The Origin of Language</i> - Eric Gans</li>
  <li className="ml-8 font-serif text-black mt-2"><i>The Technological Republic</i> - Alex Karp and Nicholas Zamiska</li>
  <li className="ml-8 font-serif text-black mt-2"><i>The Prince</i> - Niccolo Machiavelli</li>
  <li className="ml-8 font-serif text-black mt-2"><i>Read Write Own</i> - Chris Dixon</li>
  <li className="ml-8 font-serif text-black mt-2"><i>Getting to Yes</i> - Roger Fisher and William Ury</li>
  <li className="ml-8 font-serif text-black mt-2"><i>Doglapan</i> - Ashneer Grover</li>
  <li className="ml-8 font-serif text-black mt-2"><i>Structure and Interpretation of Computer Programs</i> - Harold Abelson et al.</li>
  <li className="ml-8 font-serif text-black mt-2"><i>Things Fall Apart</i> - Chinua Achebe</li>
  <li className="ml-8 font-serif text-black mt-2"><i>Human Interface Guidelines</i> - Apple</li>
  <li className="ml-8 font-serif text-black mt-2"><i>The Alchemist</i> - Paulo Coelho</li>
  <li className="ml-8 font-serif text-black mt-2"><i>Tamas</i> - Bhisham Sahni</li>
  <li className="ml-8 font-serif text-black mt-2"><i>Finite and Infinite Games</i> - James P. Carse</li>
  <li className="ml-8 font-serif text-black mt-2">hate to say it but - <i>cracking the coding interview</i> - Gayle McDowell</li>
  </ul>
  <h2 className="text-md mt-12 text-start font-serif text-zinc-500">find me on <a target="_blank" href="https://curius.app/maanav-khaitan" className="underline">curius</a></h2>
        </div>
        </div>
      </div>
      </main>
    </>
  )
}
