import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Homepage from '../components/Homepage'
import NavBar from '../components/NavBar'
import ArticleList from '../components/ArticleList';
import Article from '../components/Article';
import { UserContext } from '../context/User';
import UserList from '../components/UserList';


function App() {
  const [article, setArticle] = useState(null);
  const [user, setUser] = useState({username:""})
 return (
  <UserContext.Provider value={{user,setUser}}>
  <Router>
  <>
    <NavBar />
    <Routes> 
      <Route path="/" element={<Homepage />} />
      <Route path="/articles" element={<ArticleList />} />
      <Route path="/articles/:articleId" element={<Article article={article} setArticle ={setArticle}/>} />
      <Route path="/users" element={<UserList />} />
    </Routes>
  </>
  </Router>
  </UserContext.Provider>
  )
}

export default App
