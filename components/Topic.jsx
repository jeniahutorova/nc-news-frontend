import { useEffect, useState} from "react"
import { fetchTopics } from "../api"



const Topic = ({selectTopic, handleTopicChange}) => {
    const [topics, setTopics] = useState([])
useEffect(()=> {
    fetchTopics().then((topics)=> {
        setTopics(topics)
    })
}, [setTopics])
return(
    <div>
    <select 
    className="custom-select" 
    value={selectTopic} 
    onChange={handleTopicChange}>
        <option value="">All</option>
        {topics.map((topic, index) => (
            <option key={index} value={topic.slug}>{topic.slug}</option>
    ))}
    </select>
    </div>
)
}
export default Topic