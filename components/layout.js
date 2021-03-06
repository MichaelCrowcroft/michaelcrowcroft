import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({children, footer=true}) {
    return (
        <div>
            <Meta />
                <main>{children}</main>
            {footer && <Footer />}
        </div>
    )
}
