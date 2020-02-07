import axios from 'axios'

export const getUsers = async () => {
    const { data } = await axios.get('http://jsonplaceholder.typicode.com/users')
    return data;
}

export const getAlbums = async () => {
    const { data } = await axios.get('http://jsonplaceholder.typicode.com/albums')
    return data;
}