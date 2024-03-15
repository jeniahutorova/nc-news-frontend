import axios from "axios";

const baseURL = "https://nc-news-o4n5.onrender.com/api/";

export const fetchArticles = (topic, sortBy, sortOrder) => {
    let url = `${baseURL}articles`;
   
    if (sortBy) {
        url += `?sort_by=${sortBy}`;
        if (sortOrder) {
            url += `&order=${sortOrder}`;
        }
    } else {
        url += `&order=desc`;
    }

    if (topic) {
        url += `&topic=${topic}`;
    }
    return axios.get(url)
        .then(({ data }) => {
            return data.articles;
        });
};


export const fetchArticlesByID = (id) => {
  return axios.get(`${baseURL}articles/${id}`).then(({ data }) => {
    return data;
  });
};
export const patchArticle = (id, vote) => {
    return axios.patch(`${baseURL}articles/${id}`,{inc_votes: vote})
    .then(({data})=> {
        return data.article
    })
}

export const fetchCommentsByArticleId = (id) => {
  return axios
    .get(`${baseURL}articles/${id}/comments`)
    .then(({ data }) => {
      return data;
    })
};

export const postComment = (articleId, comment) => {
  return axios
    .post(`${baseURL}articles/${articleId}/comments`, comment)
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteComment = (commentId) => {
  return axios.delete(`${baseURL}comments/${commentId}`);
};
export const fetchUsers = () => {
  return axios.get(`${baseURL}users`).then(({ data }) => {
    return data.users;
  });
};
export const fetchTopics = () => {
    return axios.get(`${baseURL}topics`).then(({data})=> {
        return data.topics.topics
    })
}
