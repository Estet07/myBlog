import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import './App.css';
import HomePage from './pages/HomePage/HomePages';
import PostsPage from './pages/PostsPage/PostsPage';
import Footer from './components/Footer/Footer';
import SinglePostPage from './pages/SinglePostPage/SinglePostPage';
import RegistrPage from './pages/RegistrPage/RegistrPage';
import LoginPage from './pages/LoginPage/LoginPage';
import About from './components/About/About';
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/posts' element={<PostsPage />} />
        <Route path='/post/:id' element={<SinglePostPage />} />
        <Route path='/registr' element={<RegistrPage />} />
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/profile' element={<ProfilePage />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
