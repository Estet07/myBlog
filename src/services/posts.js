// создаем функцию которая возвращает промис запроса axios
import axios from "axios"

const postsURL = "http://gentle-ridge-36337.herokuapp.com/api/posts"

const getPosts = () => {
    return axios.get(postsURL)
}

export default {
    get: getPosts
}
