/* eslint-disable */
// import logo from './logo.svg';
import { useState, useEffect } from "react";
import './index.css'
import './App.css';
import './pages/popUp.css'
import './scrollPeq.css'
// import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Pool from './pages/pool';
import Maintence from './pages/Maintence';
import Contact from './pages/contact';
import Specials from './pages/specials';
import Renovation from './pages/Renovation'
import './pages/scroll'
import logofinal from './imagenes/logofinal.png'
import Popup from './popUp';

function App() {

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);
  return (
    <Router>
    {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      <div className="superior">
        <div className='b'>
        <a  href="https://aaron-garciah.com/" target="_blank"><img className='img' src={logofinal} alt='logo'></img>
</a>
        </div>
        <div className="call">
        <span className="textC">CALL US TODAY!</span>
        <a href="tel:+14438329567" id="number">443-832-9567</a>
        </div>
      </div>
 {/* !!!!!!!ESTE ES EL TOP BANNER Y LO USAREMOS CUANDO TENGAMOS VARIAS PAGINAS HECHAS */}
      <div className='top-banner' id='banner'>
      {/* <div className='b'>
        <Link className='Links' to={'/Pool'}> Pool </Link>
      </div> */}
      <div id="bscroll">
      {/* <div className='b' id="b">
        <Link className='Links' to={'/Maintence'}> Maintence </Link>
      </div> */}
      <div className='b' id="b">
      <Link className='Links' to={'/'}> Renovation </Link>
      </div>
      <div className='b' id="b">
      <Link className='Links' to={'/Contact'}> Contact </Link>
      </div>

      <div className='b' id="b">
      <Link className='Links' to={'/Specials'}>Specials</Link>
      </div>

      </div>
      
      {/* este de abajo es el banner para pantallas pequeñas */}
      <div className="dropdown" onClick={handleDropdownToggle}>
        <button className="dropbtn" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
        </button>
        {showDropdown  && (
          <div className="dropdown-content">
            <Link to={'/Specials'}>Specials</Link>
            <Link to={'/'}>Renovation</Link>
            <Link to={'/Contact'}>Contact</Link>
          </div>
        )}
        
      </div>

      <script src="script.js"></script>
    </div>


      <Routes>
        {/* <Route exact path='/' element={<HomePage/>}></Route> */}
        <Route path='/Pool' element={<Pool/>}></Route>
        <Route path='/Specials' element={<Specials/>}></Route>
        <Route path='/Maintence' element={<Maintence/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route exact path='/' element={<Renovation/>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
