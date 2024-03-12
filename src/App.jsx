import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Homepage from '../components/Homepage'
import NavBar from '../components/NavBar'
import ArticleList from '../components/ArticleList';
import Article from '../components/Article';

function App() {
  const [article, setArticle] = useState(null);
 return (
  <Router>
  <>
    <NavBar />
    <Routes> 
      <Route path="/" element={<Homepage />} />
      <Route path="/articles" element={<ArticleList />} />
      <Route path="/articles/:articleId" element={<Article article={article} setArticle ={setArticle}/>} />
    </Routes>
  </>
</Router>
  )
}

export default App
