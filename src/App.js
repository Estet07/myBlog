import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import './App.css';
import HomePage from './pages/HomePage/HomePages';
import PostsPage from './pages/PostsPage/PostsPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/posts' element={<PostsPage />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
