import { HashRouter, Route,useLocation } from 'react-router-dom';
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
       <HashRouter>
          <Route path="/" element={<Home />} Component={Home}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/about" element={<About />} />
          <Route path='/login' element={<Log />} />
          <Route path='/signup' element={<Sign />} />
          <Route path='/clothes' element={<Cclothes />} />
          <Route path='/shoes' element={<Cshoes />} />
          <Route path='/electronics' element={<Celectronic />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*'  element={<Nopage />} />

       </HashRouter>
 );
};

export default App;
