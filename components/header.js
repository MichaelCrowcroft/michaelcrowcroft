import Link from 'next/link'

export default function Header( strikethrough ) {
    return (
        <h2 className="leading-6 text-4xl font-semibold mb-20 mt-8 ">
            <Link href="/">
                <a className="hover:underline font-serif ">Michael<br />
                    <span className={"text-xl " + (strikethrough.strikethrough ? 'line-through' : '')}>does Marketing</span>
                </a>
            </Link>
        </h2>
    )
}
