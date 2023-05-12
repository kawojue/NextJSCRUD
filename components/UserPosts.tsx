const UserPosts = async ({ promise }: any) => {
    const posts = await promise
    
    return (
        <>{JSON.stringify(posts)}</>
    )
}

export default UserPosts