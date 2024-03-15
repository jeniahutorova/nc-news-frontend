import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Homepage from '../components/Homepage'
import NavBar from '../components/NavBar'
import ArticleList from '../components/ArticleList';
import Article from '../components/Article';
import { UserContext } from '../context/User';
import UserList from '../components/UserList';
import ErrorPage from '../components/ErrorPage';


function App() {
  const [article, setArticle] = useState(null);
  const [user, setUser] = useState({username:""})
  const [selectTopic, setSelectTopic] = useState("")
 return (
  <UserContext.Provider value={{user,setUser}}>
  <Router>
  <>
    <NavBar />
    <Routes> 
      <Route path="/" element={<Homepage />} />
      <Route path="/articles" element={<ArticleList selectTopic ={selectTopic} setSelectTopic={setSelectTopic} />} />
      <Route path="/articles/:articleId" element={<Article article={article} setArticle ={setArticle}/>} />
      <Route path="/users" element={<UserList />} />
      <Route path='*' element={<ErrorPage />}></Route>
    </Routes>
  </>
  </Router>
  </UserContext.Provider>
  )
}

export default App
