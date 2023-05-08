import Link from 'next/link'

const page: React.FC = () => {
    return (
        <>
            <h1 className="text-2xl">About Page</h1>
            <Link href="/" className="underline">Go to Home page</Link>
        </>
    )
}

export default page