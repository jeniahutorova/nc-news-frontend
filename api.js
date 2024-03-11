import axios from "axios";

const baseURL = "https://nc-news-o4n5.onrender.com/api/"

export const fetchArticles = () => {
return axios.get(`${baseURL}articles`).then(({data}) => {
    return data.articles
})
}
