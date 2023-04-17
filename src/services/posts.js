// создаем функцию которая возвращает промис запроса axios
import axios from "axios"
import { rootApi } from "../api"

//получить все посты
const getPosts = () => {
    return axios.get(rootApi + "/posts")
}
//Получить 1 пост
const getPost = (id) => {
    return axios.get(`${rootApi}/posts/${id}`)
}

export default {
    get: getPosts,
    getPost: getPost
}
