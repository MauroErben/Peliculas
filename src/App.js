import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Estrenos from './Components/Estrenos';
import Tendencias from './Components/Tendencias';
import Layout from './Components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/estrenos' element={<Estrenos />} />
          <Route path='/tendencias' element={<Tendencias />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
