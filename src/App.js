import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Details from './Components/Movies/Details';
import LoginForm from './Components/Auth/LoginForm';
import Favorites from './Components/Movies/favorites';
import UpcomingMovies from './Components/Movies/upcoming';
import NavBar from './Components/Header/navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/estrenos' element={<UpcomingMovies />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/auth/login' element={<LoginForm />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
