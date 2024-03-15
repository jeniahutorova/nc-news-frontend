import { useContext, useState } from "react";
import { postComment } from "../api";
import { ErrContext } from "../context/Error";
import { UserContext } from "../context/User";

const CommentForm = ({ articleId, setComments }) => {
  const [formData, setFormData] = useState({ username: "", body: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { setError } = useContext(ErrContext);
  const { user } = useContext(UserContext);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name === "name" ? "username" : e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const commentData = { ...formData };
    if (user.username) {
      commentData.username = user.username;
    }
    postComment(articleId, commentData)
      .then((newComment) => {
        handleNewComment(newComment);
        setSuccess(true);
        setIsLoading(false);
        setFormData({ username: "", body: "" });
      })
      .catch((error) => {
        setError(
          error.message || "Failed to post comment. Please try again later."
        );
      });
  };
  const handleNewComment = (newItem) => {
    setComments((prevItems) => [...prevItems, newItem]);
  };

  return (
    <>
      {!user.username ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            id="name"
            name="username"
            onChange={handleChange}
            value={formData.username}
            required
          />

          <label htmlFor="comment">Comment:</label>
          <input
            type="text"
            id="comment"
            name="body"
            onChange={handleChange}
            value={formData.body}
            required
          />

          <button type="submit" className="btn btn-outline-primary">
            {isLoading ? "Submitting" : "Submit"}
          </button>
          {success && <p>Form submitted successfully</p>}
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Username:</label>
            <input
            type="text"
            id="name"
            name="username"
            onChange={handleChange}
            value={user.username}
            readOnly 
          />
          <label htmlFor="comment">Comment:</label>
          <input
            type="text"
            id="comment"
            name="body"
            onChange={handleChange}
            value={formData.body}
            required
          />

          <button type="submit" className="btn btn-outline-primary">
            {isLoading ? "Submitting" : "Submit"}
          </button>
          {success && <p>Form submitted successfully</p>}
        </form>
      )}
    </>
  );
};
export default CommentForm;
