import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticlesByID,} from '../api';
import ArticleWithComments from './ArticleWithCommets';

const Article = ({article, setArticle}) => {
    const { articleId } = useParams();
    const [vote, setVote] = useState(0)
    useEffect(() => {
        fetchArticlesByID(articleId).then(({article}) => {
          setArticle(article);
          setVote(article.votes)
        });
      }, [articleId]);

      if (!article) {
        return <div>Loading...</div>;
        
    }
     const handleVote = (voteType) => {
        const updatedVotes = voteType === 'up' ? vote + 1 : vote - 1
        setVote(updatedVotes)
        setArticle({...article, votes: updatedVotes})
     }
    return(
    <>
        <div className="card-body text-center">
              <h2>{article.title}</h2>
              <p>{article.author}</p>
              <p>Topic: {article.topic}</p>
              <p>{article.body}</p>
              <img src={article.article_img_url} alt={article.title} className="img-fluid" />
              <p>Votes: {article.votes}</p>
              <button type="button" className="btn btn-outline-primary" onClick={()=> handleVote('up')}>Upvote</button>
              <button type="button" className="btn btn-outline-primary" onClick={()=> handleVote('down')}>Downvote</button>

        </div>
        {article.comment_count === 0 ? (<p> No comments found </p>) : <ArticleWithComments/>}
    </>
    )

}
export default Article