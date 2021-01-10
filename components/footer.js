import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="">
      <Container>
        <div className="py-2">
          <h3 className="font-serif py-4 text-xl font-bold tracking-tighter leading-tight">
            End of page
          </h3>
        </div>
      </Container>
    </footer>
  )
}
