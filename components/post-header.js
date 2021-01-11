import DateFormatter from '../components/date-formatter'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, date }) {
    return (
        <div>
            <PostTitle>{title}</PostTitle>
            <div className="mb-6 text-lg italic text-gray-600 text-center">
                <DateFormatter dateString={date} />
            </div>
        </div>
    )
}
