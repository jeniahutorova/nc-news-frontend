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

export const postComment = (articleId, comment) => {
    return axios.post(`${baseURL}articles/${articleId}/comments`, comment)
      .then(({ data }) => {
        return data.comment
      })
}

export const deleteComment =(commentId) => {
    return axios.delete(`${baseURL}comments/${commentId}`)
}
export const fetchUsers = () => {
    return axios.get(`${baseURL}users`).then(({data})=> {
        return data.users
    })
}