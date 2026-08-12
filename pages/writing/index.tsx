import Head from 'next/head'
import Link from 'next/link'
import { posts } from '@/lib/posts'

export default function Writing() {
  return (
    <>
      <Head>
        <title>{"my writing"}</title>
        <meta name="description" content="Maanav Khaitan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ja1.jpg" />
      </Head>
      <main className="bg-white min-h-screen">
        <div className="max-w-2xl mx-auto px-8 py-24 sm:py-36">
          <Link href="/" className="font-serif text-zinc-400 hover:text-black">&larr; home</Link>
          <h1 className="text-5xl mt-8 font-serif text-black">my writing</h1>
          <ul className="mt-16">
            {posts.map((post) => (
              <li key={post.slug} className="mt-10 first:mt-0">
                <Link href={`/writing/${post.slug}`} className="group">
                  <h3 className="text-2xl font-serif text-black group-hover:underline">{post.title}</h3>
                  <time className="block mt-1 text-sm font-serif text-zinc-500" dateTime={post.dateISO}>{post.date}</time>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}
