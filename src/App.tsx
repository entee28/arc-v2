import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Adoption from './components/pages/Adoption';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import PetDetail from './components/pages/PetDetail';
import Wrapper from './utils/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/adoption' element={<Adoption />} />
          <Route path='/adoption/:slug' element={<PetDetail />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;