import { Metadata } from "next"
import Link from 'next/link'
import getAllUsers from "@/lib/getAllUsers"

export const metadata: Metadata = {
    title: 'Users'
}

const page = async () => {
    const users = await getAllUsers()

    return (
        <section>
            <Link className="mb-4 font-medium" href="/">
                Go back Home
            </Link>
            <article className="w-[95vw] max-w-[500px] mx-auto bg-clr-0 px-3 py-5 rounded-lg">
                <div className="grid grid-cols-2 gap-2 place-items-center">
                    {users.map((user: any) => (
                        <Link key={user.id} href={`/users/${user.id}`}
                        className="px-2 py-1 rounded-md bg-white">{user.name}</Link>
                    ))}
                </div>
            </article>
        </section>
    )
}

export default page