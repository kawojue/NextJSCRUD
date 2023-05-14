import axios from "axios";

const getAllUsers = async (): Promise<any> => {
    let data: any
    await axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res: any) => {
        data = res.data
    })
    .catch((err: any) => {
        throw new Error("Failed to fetch users!")
    })
    return data
}

export default getAllUsers
