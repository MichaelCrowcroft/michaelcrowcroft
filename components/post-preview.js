import DateFormatter from '../components/date-formatter'
import Link from 'next/link'

export default function PostPreview({
    index,
    title,
    date,
    excerpt,
    slug,
}) {
    return (
        <>
            {index !== 0 && <hr className="block border-t-1 border-gray-200 mx-auto my-6"/>}

            <div className="px-2">
                <h3 className="text-2xl font-serif leading-none">
                    <Link as={`/posts/${slug}`} href="/posts/[slug]">
                        <a className="font-black hover:underline text-teal-800">{title}</a>
                    </Link>
                </h3>
                <div className="text-md italic mb-4 text-gray-600">
                    <DateFormatter dateString={date} />
                </div>
                <p className="text-md leading-relaxed mb-4">{excerpt}</p>
            </div>
        </>
    )
}
