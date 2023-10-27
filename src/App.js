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
       <HashRouter>
          <Route exact path="/style-shop/" element={<Home />} Component={Home}/>
          <Route exact path="/style-shop/contact/" element={<Contact />}/>
          <Route exact path="/style-shop/purchases/" element={<Purchases />} />
          <Route exact path="/style-shop/about/" element={<About />} />
          <Route exact path='/style-shop/login/' element={<Log />} />
          <Route exact path='/style-shop/signup/' element={<Sign />} />
          <Route exact path='/style-shop/clothes/' element={<Cclothes />} />
          <Route exact path='/style-shop/shoes/' element={<Cshoes />} />
          <Route exact path='/style-shop/electronics/' element={<Celectronic />} />
          <Route exact path='/style-shop/profile/' element={<Profile />} />
          <Route path='*'  element={<Nopage />} />

       </HashRouter>
 );
};

export default App;
