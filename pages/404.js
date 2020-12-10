import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
    return (
        <div>

        <Head>
            <title>Michael Crowcroft's Website</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-6xl font-light font-serif mb-2">404</h1>

                <h3 className="text-3xl font-serif">Page not found.</h3>

                <hr className="block w-full border-t-0 max-w-sm mx-auto border-gray-300 my-8" />

                <p className="text-xl">Let's <Link href="/"><a className="text-gray-500">go home</a></Link>, shall we?</p>
            </div>
        </main>

        </div>

    )
}
