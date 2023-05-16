import axios from 'axios'

const getUser = async (userId: string): Promise<any> => {
    let data: any
    await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res: any) => {
        data = res.data
    })
    .catch((err: any) => {
        data = undefined
    })

    return data
}

export default getUser
