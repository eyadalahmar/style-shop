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
          <Route exact path="/" element={<Home />} Component={Home}/>
          <Route exact path="/contact/" element={<Contact />}/>
          <Route exact path="/purchases/" element={<Purchases />} />
          <Route exact path="/about/" element={<About />} />
          <Route exact path='/login/' element={<Log />} />
          <Route exact path='/signup/' element={<Sign />} />
          <Route exact path='/clothes/' element={<Cclothes />} />
          <Route exact path='/shoes/' element={<Cshoes />} />
          <Route exact path='/electronics/' element={<Celectronic />} />
          <Route exact path='/profile/' element={<Profile />} />
          <Route path='*'  element={<Nopage />} />

       </Routes>
 );
};

export default App;
