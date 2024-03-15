import { useParams } from "react-router-dom";
import { fetchCommentsByArticleId } from "../api";
import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import { deleteComment } from "../api";
import { UserContext } from "../context/User";
import { useContext } from "react";
import { ErrContext } from "../context/Error";

const ArticleComments = () => {
  const { articleId } = useParams();
  const [comments, setComments] = useState([]);
  const { user } = useContext(UserContext);
  const { setError } = useContext(ErrContext);
  useEffect(() => {
    fetchCommentsByArticleId(articleId)
      .then((comments) => {
        setComments(comments);
        setError(null);
      })
      .catch((error) => {
        setError(
          error.message || "Failed to fetch comments. Please try again later."
        );
      });
  }, [articleId]);
  const handleDeleteComment = (commentId) => {
    deleteComment(commentId)
      .then(() => {
        setComments((currComments) => {
          return currComments.filter(
            (comment) => comment.comment_id !== commentId
          );
        });
        alert("Comment deleted successfully!");
      })
      .catch(() => {
        alert("Something went wrong!");
      });
  };
  return (
    <div className="card-body text-center">
      {comments && comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.comment_id} className="comment">
            <p>Author: {comment.author}</p>
            <p>{comment.body}</p>
            <p>Votes: {comment.votes}</p>
            {user.username === comment.author && (
              <button onClick={() => handleDeleteComment(comment.comment_id)}>
                ✕
              </button>
            )}
          </div>
        ))
      ) : (
        <p>Sorry, no comments yet</p>
      )}
      <CommentForm articleId={articleId} setComments={setComments} />
    </div>
  );
};

export default ArticleComments;
