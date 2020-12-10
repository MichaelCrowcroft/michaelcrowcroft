import DateFormatter from '../components/date-formatter'
import Link from 'next/link'

export default function PostPreview({
    title,
    date,
    excerpt,
    slug,
}) {
    return (
        <div className="px-2">
            <h3 className="text-2xl font-serif font-semibold leading-none">
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                    <a className="hover:underline">{title}</a>
                </Link>
            </h3>
            <div className="text-md mb-4">
                <DateFormatter dateString={date} />
            </div>
            <p className="text-md leading-relaxed mb-4">{excerpt}</p>
        </div>
    )
}
