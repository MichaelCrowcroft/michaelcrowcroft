import Head from 'next/head'
import { getAllPosts } from '../lib/api'
import Container from '../components/container'
import Layout from '../components/layout'
import PostPreview from '../components/post-preview'
import MailIcon from '../components/mail-icon'
import Intro from '../components/intro'

export default function Home({ recentPosts }) {
    return (
        <div>
            <Layout footer={false}>
                <Head>
                    <title>Michael Crowcroft's Website</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div className="flex flex-wrap items-center lg:h-screen xl:h-screen 2xl:h-screen
                                text-center lg:text-left xl:text-left 2xl:text-left p-5 md:p-10 lg:p-20 xl:p-20 2xl:p-20">
                    <div className="w-full lg:w-2/5 xl:w-2/5 2xl:w-2/5 lg:pr-8 xl:pr-8 2xl:pr-8">
                        <Intro />
                    </div>
                    <div className="w-full lg:w-3/5 xl:w-3/5 2xl:w-3/5 lg:pl-8 xl:pl-8 2xl:pl-8">
                        <hr className="block border-t-1 border-gray-900 mx-auto my-6"/>
                        <Container>
                            {recentPosts.map((post) => (
                                <PostPreview
                                    key={post.slug}
                                    title={post.title}
                                    date={post.date}
                                    slug={post.slug}
                                    excerpt={post.excerpt}
                                />
                            ))}
                        </Container>
                        <hr className="block border-t-1 border-gray-900 mx-auto my-6"/>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export async function getStaticProps() {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'excerpt',
    ])
    const recentPosts = allPosts.slice(0, 3);

    return {
        props: { recentPosts },
    }
}