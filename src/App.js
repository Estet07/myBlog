import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import './App.css';
import HomePage from './pages/HomePage/HomePages';
import PostsPage from './pages/PostsPage/PostsPage';
import Footer from './components/Footer/Footer';
import SinglePostPage from './pages/SinglePostPage/SinglePostPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/posts' element={<PostsPage />} />
        <Route path='/post/:id' element={<SinglePostPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
