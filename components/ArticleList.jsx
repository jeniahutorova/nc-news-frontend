import { useEffect, useState } from "react";
import {fetchArticles} from "../api"
import ArticleCard from "./ArticleCard";
import Topic from "./Topic";
const ArticleList = ({selectTopic, setSelectTopic}) => {
    const [articles, setArticles] = useState([]);
    const[isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetchArticles(selectTopic).then((articles) => {
          setArticles(articles)
          setIsLoading(false);
        })
      }, [selectTopic]);
    return(
        <div>
            {isLoading ? (<p> Loading ...</p>) :
            (
                <>
                <Topic selectTopic={selectTopic} setSelectTopic={setSelectTopic}/>
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
                </>
            )}
        </div>

        
    )
}
export default ArticleList
