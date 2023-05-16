import axios from "axios";

const getAllUsers = async () => {
    let data: any
    await axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res: any) => {
        data = res.data
    })
    .catch((err: any) => {
        data = undefined
    })

    return data
}

export default getAllUsers