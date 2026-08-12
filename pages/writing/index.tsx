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
      <main className="bg-white h-full flex items-center justify-center">
        <div className="flex flex-col min-h-screen main-body">
          <div className="flex flex-col sm:flex-row gap-12 my-36 mx-8">
            <img src="/ja11.jpeg" className="h-64 w-64" />
            <div>
              <h2 className="text-5xl text-start font-serif text-black">my writing</h2>
              <ul className="mt-12">
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
          </div>
        </div>
      </main>
    </>
  )
}
