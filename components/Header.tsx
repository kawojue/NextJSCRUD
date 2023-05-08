import Link from 'next/link'

const Header = () => {
    return (
        <header className="w-full mb-5">
            <nav className="flex justify-between items-center mx-auto px-9 py-5 font-medium text-2xl">
                <h1>Next JS Crud App.</h1>
                <Link href='/users'>Users</Link>
            </nav>
        </header>
    )
}

export default Header