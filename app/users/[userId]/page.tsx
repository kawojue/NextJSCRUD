import { Suspense } from "react"
import getUser from "@/lib/getUser"
import Spinner from "@/components/Spinner"
import getUserPosts from "@/lib/getUserPosts"
import UserPosts from '@/app/users/[userId]/posts/page'

interface User {
    params: {
        userId: string
    }
}

const page = async ({ params: { userId } }: User) => {
    const user = await getUser(userId)
    const userPosts = await getUserPosts(userId)

    return (
        <section>
            <h3>{user.name}</h3>
            <Suspense fallback={<Spinner/>}>
                <UserPosts posts={userPosts} />
            </Suspense>
        </section>
    )
}

export default page
