import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Details from './Components/Movies/Details';
import Series from './Components/Series';
import LoginForm from './Components/Auth/LoginForm';
import Favorites from './Components/Movies/favorites';
import NavBar from './Components/Header/navbar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/series' element={<Series />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/auth/login' element={<LoginForm />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
