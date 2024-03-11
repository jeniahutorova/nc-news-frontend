import ArticleComments from "./ArticleComments";
import { useState } from "react";
const ArticleWithComments = ({article}) => {
    const [showComments, setShowComments] = useState(true);
    const toggleComments = () => {
        setShowComments(!showComments);
      };

      return(
        <div className="card-body text-center">
            <h2>{article.title}</h2>
            <p>{article.author}</p>
            <p>Topic: {article.topic}</p>
            <p>{article.body}</p>
            <img src={article.article_img_url} alt={article.title} className="img-fluid" />
            <p>Votes:{article.votes}</p>
            <button type="button" class="btn btn-outline-primary" onClick={toggleComments}> {showComments ? "Hide comments" : "Show comments"}</button>
            {showComments && <ArticleComments/>}
        </div>
        
      )
}
export default ArticleWithComments