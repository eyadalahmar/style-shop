import { HashRouter, Route,Routes,useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Purchases from './pages/Purchases';
import About from './pages/About';
import Log from './pages/Log';
import Sign from './pages/Sign';
import Cclothes from './pages/Cclothes'
import Cshoes from './pages/Cshoes'
import Celectronic from './pages/Celectronics';
import Nopage from './pages/Nopage';
import Profile from './pages/Profile'

const App = () => {
  

 return (   
       <Routes>
          <Route path="/style-shop" element={<Home />} Component={Home}/>
          <Route path="/style-shop/contact" element={<Contact />}/>
          <Route path="/style-shop/purchases" element={<Purchases />} />
          <Route path="/style-shop/about" element={<About />} />
          <Route path='/style-shop/login' element={<Log />} />
          <Route path='/style-shop/signup' element={<Sign />} />
          <Route path='/style-shop/clothes' element={<Cclothes />} />
          <Route path='/style-shop/shoes' element={<Cshoes />} />
          <Route path='/style-shop/electronics' element={<Celectronic />} />
          <Route path='/style-shop/profile' element={<Profile />} />
          <Route path='*'  element={<Nopage />} />

       </Routes>
 );
};

export default App;
