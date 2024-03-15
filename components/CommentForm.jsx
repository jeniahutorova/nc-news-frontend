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
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="name" className="form-label">Username:</label>
            <input
              type="text"
              id="name"
              name="username"
              onChange={handleChange}
              value={formData.username}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="comment" className="form-label">Comment:</label>
            <input
              type="text"
              id="comment"
              name="body"
              onChange={handleChange}
              value={formData.body}
              className="form-control"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-outline-primary">
          {isLoading ? "Submitting" : "Submit"}
        </button>
        {success && <p>Form submitted successfully</p>}
      </form>
    ) : (
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="name" className="form-label">Username:</label>
            <input
              type="text"
              id="name"
              name="username"
              onChange={handleChange}
              value={user.username}
              className="form-control"
              readOnly
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="comment" className="form-label">Comment:</label>
            <input
              type="text"
              id="comment"
              name="body"
              onChange={handleChange}
              value={formData.body}
              className="form-control"
              required
            />
          </div>
        </div>
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
