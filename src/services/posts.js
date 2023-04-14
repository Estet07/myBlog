// создаем функцию которая возвращает промис запроса axios
import axios from "axios"

const postsURL = "https://gentle-ridge-36337.herokuapp.com/api/posts"
//получить все посты
const getPosts = () => {
    return axios.get(postsURL)
}
//Получить 1 пост
const getPost = (id) => {
    return axios.get(`${postsURL}/${id}`)
}

export default {
    get: getPosts,
    getPost: getPost
}
