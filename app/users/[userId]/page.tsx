import getUser from "@/lib/getUser"

interface User {
    params: {
        userId: string
    }
}

const page = async ({ params: { userId } }: User) => {
    const user = await getUser(userId)

    return (
        <>
            {JSON.stringify(user)}
        </>
    )
}

export default page
