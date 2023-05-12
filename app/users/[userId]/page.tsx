import getUser from "@/lib/getUser"
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
            {JSON.stringify(user)}
            <h3>{await user.name}</h3>
            <p>@{user.username}</p>
            <h4>{user.email}</h4>
            <p>{user.address.street}</p>
            <UserPosts posts={userPosts} />
        </section>
    )
}

export default page
