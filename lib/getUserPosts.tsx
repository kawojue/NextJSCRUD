import axios from 'axios'

const getUserPosts = async (id: string) => {
    let data: any
    await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then((res: any) => {
        data = res.data
    })
    .catch((err: any) => {
        throw new Error("Failed to fetch User's Posts!")
    })

    return data
}

export default getUserPosts