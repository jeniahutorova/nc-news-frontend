import axios from "axios";

const baseURL = "https://nc-news-o4n5.onrender.com/api/"

export const fetchArticles = () => {
return axios.get(`${baseURL}articles`).then(({data}) => {
    return data.articles
})
}
export const fetchArticlesByID = (id) => {
    return axios.get(`${baseURL}articles/${id}`).then(({data})=>{
        return data
    })
}
export const fetchCommentsByArticleId = (id) => {
    return axios.get(`${baseURL}articles/${id}/comments`).then(({data})=> {
        return data
    }).catch((err)=> {
        setErr("'Failed to fetch article. Please try again later.'")
    })
}
