import { useState } from "react"
import { postComment } from "../api"

const CommentForm = ({articleId, setComments}) => {
const [formData, setFormData] = useState({username:"", body:""})
const [isLoading, setIsLoading] = useState(false)
const [success, setSuccess] = useState(false)
    
const handleChange = (e) => {
setFormData({...formData, [e.target.name === "name" ? "username" : e.target.name]: e.target.value})
}

const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    postComment(articleId, formData).then((newComment)=> {
        handleNewComment(newComment)
        setSuccess(true)
        setIsLoading(false)
        setFormData({ username: "", body: "" });
    }).catch((error) => {
        console.error('Error submitting comment:', error);
        setIsLoading(false);
      });
}
const handleNewComment = (newItem) => {
    setComments((prevItems) => [...prevItems, newItem]);
}

return(
    <>
    <form onSubmit={handleSubmit}>
         <label htmlFor="name">Username:</label>
        <input type="text" id="name" name="username" onChange={handleChange} value={formData.username} required/>

        <label htmlFor="comment">Comment:</label>
        <input type="text" id="comment" name="body" onChange={handleChange} value={formData.body} required/>

        <button type="submit" className="btn btn-outline-primary">{isLoading ? "Submitting" : "Submit" }</button>
        
    </form>
    {success && (<p>Form submitted successfully</p>)}
    </>
)
}
export default CommentForm