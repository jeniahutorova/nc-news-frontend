import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticlesByID, patchArticle } from '../api';
import ArticleWithComments from './ArticleWithCommets';

const Article = ({ article, setArticle }) => {
    const { articleId } = useParams();
    const [vote, setVote] = useState(0);

    useEffect(() => {
        fetchArticlesByID(articleId).then(({ article }) => {
            setArticle(article)
        });
    }, [articleId, setArticle]);

    const handleVote = () => {
    const updatedVote = 1;
    setVote(updatedVote);
    patchArticle(articleId, updatedVote)
        .then((updatedArticle) => {
           setArticle(updatedArticle);
        })
        .catch((error) => {
            setErr("Oops, something went wrong! Try again later!")
            setVote(vote);
        });
    };

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="card-body text-center">
                <h2>{article.title}</h2>
                <p>{article.author}</p>
                <p>Topic: {article.topic}</p>
                <p>{article.body}</p>
                <img src={article.article_img_url} alt={article.title} className="img-fluid" />
                <p>Votes: {article.votes}</p>
                <button type="button" className="btn btn-outline-primary" onClick={handleVote}>
                    Upvote
                </button>
            </div>
            {article.comment_count === 0 ? (
                <p> No comments found </p>
            ) : (
                <ArticleWithComments />
            )}
        </>
    );
};

export default Article;