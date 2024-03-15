import { useEffect, useState } from "react";
import {fetchArticles} from "../api"
import ArticleCard from "./ArticleCard";
import Topic from "./Topic";
import Sort from "./Sort";
import { useSearchParams } from 'react-router-dom';

const ArticleList = ({selectTopic, setSelectTopic, isLoading, setIsLoading}) => {
    const [articles, setArticles] = useState([]);
    const [sortBy, setSortBy] = useState("comment_count");
    const [sortOrder, setSortOrder] = useState("asc");
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setIsLoading(true)
        fetchArticles(selectTopic, sortBy, sortOrder).then((articles) => {
          setArticles(articles)
          setIsLoading(false);
        })
      }, [selectTopic, sortBy, sortOrder]);
      
      const handleTopicChange = (e) => {
        const selectedTopic = e.target.value
        setSelectTopic(selectedTopic)
        if(selectedTopic){
            setSearchParams({ topic: selectedTopic });
        }else{
            setSearchParams({});
        }
    }
    const handleSortChange = (sortBy, sortOrder) => {
        setSortBy(sortBy)
        setSortOrder(sortOrder)
        setSearchParams({topic : selectTopic, sortBy, sortOrder});
      };
    return(
        <div className="container text-center">
            {isLoading ? (<p> Loading ...</p>) :
            (
                <>
                <Topic selectTopic={selectTopic} handleTopicChange={handleTopicChange} />
                <Sort sortBy={sortBy} sortOrder={sortOrder} handleSortChange={handleSortChange}/>
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
