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

                <div className="flex items-center justify-between h-screen p-20">
                    <div className="pl-8 pr-8 w-2/5 self-center col-span-1">
                        <Intro />
                    </div>
                    <div className="pl-8 pr-8 w-3/5 self-center col-span-1">
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