import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About'
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav>
                <h1>About Page Navbar</h1>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}