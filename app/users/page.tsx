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
            <article className="flex flex-col gap-2 w-fit">
                {users.map((user: any) => (
                    <Link key={user.id} href={`/users/${user.id}`}>{user.name}</Link>
                ))}
            </article>
        </section>
    )
}

export default page