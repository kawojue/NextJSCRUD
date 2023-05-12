import type { Metadata } from "next"
import { Suspense } from "react"
import getUser from "@/lib/getUser"
import Spinner from "@/components/Spinner"
import getUserPosts from "@/lib/getUserPosts"
import UserPosts from "@/components/UserPosts"

interface User {
    params: {
        userId: string
    }
}

export async function generateMetadata ({ params: { userId } }: User): Promise<Metadata> {
    const user = await getUser(userId)
    return {
        title: user.name,
        description: `Page of ${user.name}`
    }
}

const page = async ({ params: { userId } }: User) => {
    const user = await getUser(userId)
    const userPosts: Promise<any> =  getUserPosts(userId)

    return (
        <section>
            <h3>{user.name}</h3>
            <Suspense fallback={<Spinner/>}>
                {/* @ts-expect-error */}
                <UserPosts promise={userPosts} />
            </Suspense>
        </section>
    )
}

export default page
