import Link from "next/link"
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Homepage',
    description: 'Welcome!'
}

export default function Home() {
  return (
    <main>
      <p className="text-xl">Hello, World!</p>
      <Link href="/about" className="underline">Go to About Page</Link>
    </main>
  )
}
