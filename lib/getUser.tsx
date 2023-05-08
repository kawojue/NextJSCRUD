import axios from 'axios'

const getUser = async (userId: string) => {
    let data: any
    await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res: any) => {
        data = res.data
    })
    .catch((err: any) => {
        throw new Error ("User does not exist.")
    })

    return data
}

export default getUser