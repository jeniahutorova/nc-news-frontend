import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticlesByID, patchArticle } from '../api';
import ArticleWithComments from './ArticleWithCommets';

const Article = ({ article, setArticle, error, setError}) => {
    const { articleId } = useParams();
    const [vote, setVote] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchArticlesByID(articleId).then(({ article }) => {
            setArticle(article)
            setLoading(false); 
        }).catch((error)=> {
            if (error.response && error.response.status === 400) {
                setError(`Bad Request: Article with ID "${articleId}" not found.`);
            } else {
                setError('Failed to fetch article. Please try again later.');
            }
            setLoading(false);
        })
    }, [articleId, setArticle]);

    const handleVote = () => {
    const updatedVote = 1;
    setVote(updatedVote);
    patchArticle(articleId, updatedVote)
        .then((updatedArticle) => {
           setArticle(updatedArticle);
        })
        .catch((error) => {
            if (error.response && error.response.status === 400) {
                setError(`Bad Request: Failed to vote on article with ID "${articleId}".`);
            } else {
                setError('Failed to vote. Please try again later.');
            }
            setVote(vote);
        });
    };
    if (error) {
        return <div>{error}</div>;
    }

    if (!article) {
        return <div>No article found</div>;
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
                <ArticleWithComments error={error} setError={setError}/>
            )}
        </>
    );
};

export default Article;