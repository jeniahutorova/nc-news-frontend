import { useParams } from "react-router-dom";
import { fetchCommentsByArticleId } from "../api";
import { useState,useEffect } from "react";
import CommentForm from "./CommentForm";

const ArticleComments = () => {
    const {articleId} = useParams()
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetchCommentsByArticleId(articleId).then((comments)=> {
            setComments(comments)
        })
      }, [articleId]);
      return(
                <div className="card-body text-center">
            {comments.map((comment)=> (
               <div key={comment.comment_id} className="comment">
               <p>Author: {comment.author}</p>
               <p>{comment.body}</p>
               <p>Votes: {comment.votes}</p>
           </div>
            ))}
            <CommentForm articleId={articleId} setComments={setComments}/>
        </div>
        
      )
}
export default ArticleComments