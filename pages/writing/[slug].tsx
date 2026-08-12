import Head from 'next/head'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { posts, Post } from '@/lib/posts'

export default function WritingPost({ post }: { post: Post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.subtitle ?? post.title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ja1.jpg" />
      </Head>
      <main className="bg-white min-h-screen">
        <article className="max-w-2xl mx-auto px-8 py-24 sm:py-36">
          <Link href="/writing" className="font-serif text-zinc-400 hover:text-black">&larr; all my writing</Link>
          <h1 className="text-4xl mt-8 font-serif text-black">{post.title}</h1>
          {post.subtitle && <h2 className="text-xl mt-3 font-serif text-zinc-500">{post.subtitle}</h2>}
          <time className="block mt-3 text-sm font-serif text-zinc-500" dateTime={post.dateISO}>{post.date}</time>
          <div className="post-content mt-10" dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = posts.find((p) => p.slug === params?.slug)
  if (!post) return { notFound: true }
  return { props: { post } }
}
