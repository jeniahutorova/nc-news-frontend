import { useEffect, useState } from "react";
import {fetchArticles} from "../api"
import ArticleCard from "./ArticleCard";
const ArticleList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        setIsLoading(true)
        fetchArticles().then((articles) => {
          setArticles(articles)
          setIsLoading(false);
        })
      }, []);
    return(
        <div>
            {isLoading ? (<p> Loading ...</p>) :
            (
                <ul>
                    {articles.map((article)=>(
                        <ArticleCard 
                        key={article.article_id}
                        article_id ={article.article_id}
                        title={article.title}
                        topic={article.topic}
                        img_url={article.article_img_url}
                        author={article.author}
                        votes={article.votes}
                        ></ArticleCard>
                    ))}
                </ul>
            )}
        </div>
        
    )
}
export default ArticleList
