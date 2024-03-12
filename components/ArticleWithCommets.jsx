import ArticleComments from "./ArticleComments";
import { useState } from "react";
const ArticleWithComments = ({setComments}) => {
    const [showComments, setShowComments] = useState(false);
    const toggleComments = () => {
        setShowComments(!showComments);
      };

      return(
        <div className="card-body text-center">
            <button type="button" className="btn btn-outline-primary" onClick={toggleComments}> {showComments ? "Hide comments" : "Show comments"}</button>
            {showComments && <ArticleComments setComments ={setComments}/>}
        </div>
        
      )
}
export default ArticleWithComments