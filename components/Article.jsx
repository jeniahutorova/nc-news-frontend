import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticlesByID,} from '../api';
import ArticleComments from './ArticleComments';


const Article = () => {
    const { articleId } = useParams();
    const [article, setArticle] = useState(null);
    useEffect(() => {
        fetchArticlesByID(articleId).then(({article}) => {
          setArticle(article);
        });
      }, [articleId]);

      if (!article) {
        return <div>Loading...</div>;
    }
    return(
        <>
        <div className="card-body text-center">
              <h2>{article.title}</h2>
              <p>{article.author}</p>
              <p>Topic: {article.topic}</p>
              <img src={article.article_img_url} alt={article.title} className="img-fluid" />
              <p>Votes: {article.votes}</p>
        </div>
        <ArticleComments articleId={articleId}/>
        </>
    )

}
export default Article