import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Details from './Components/Movies/Details';
import Layout from './Components/Layout';
import Series from './Components/Series';
import LoginForm from './Components/Auth/LoginForm';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/series' element={<Series />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/auth/login' element={<LoginForm />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
