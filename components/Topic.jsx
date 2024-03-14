import { useEffect, useState} from "react"
import { fetchTopics } from "../api"


const Topic = ({selectTopic, setSelectTopic}) => {
    const [topics, setTopics] = useState([])
useEffect(()=> {
    fetchTopics().then((topics)=> {
        setTopics(topics)
    })
}, [setTopics])
const handleTopicChange = (e) => {
    setSelectTopic(e.target.value)
}
return(
    <div>
    <select 
    value={selectTopic} 
    onChange={handleTopicChange}>
        <option value=""></option>
        {topics.map((topic, index) => (
            <option key={index} value={topic.slug}>{topic.slug}</option>
    ))}
    </select>
    </div>
)
}
export default Topic