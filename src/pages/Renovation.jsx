import React from "react";
import { Link } from 'react-router-dom';
import SignupForm from '../form/Form'
import BottomBanner from "../bottomBanner";
import Carrusel from "./carrusel";
import renovationFoto from '../imagenes/renovationFoto.jpg'


// import { useNavigate } from 'react-router-dom'
// import Contact from "./contact";
export default function HomePage() {
//   const navigate = useNavigate();
//   const navigateProps = (path) => {
//   navigate(path);
// }
    return (
    <div>
      {/* <div className="superior">
        <div className='b'>
          <img src="https://watercrafters.com/wp-content/uploads/2023/12/logo.svg" alt='logo'></img>
        </div>
        <div className="call">
        <span className="textC">CALL US TODAY!</span>
        <span className="number">633-610-777</span>
        </div>
      </div> */}
      <div className='contact'>
            <span></span>
            <div className='textoC'>
                {/* <span>Revitalize Your Pool with Watercrafters' Expert Renovation Services - Where Quality Meets Innovation!</span> */}
                <span> We provide comprehensive maintenance services for residential pools, as well as renovation and remodeling of interior and exterior spaces, standing out for our quality, attention to detail, and commitment to customer satisfaction.</span>
                <Link className='button' to={'/Contact'}> contact us </Link>
                
            </div>

            <img src={renovationFoto}alt="img"></img>
            <span></span>
      </div>
      <div className="renovationForm">
    
        <div className="renovationInfo">
            <h2>Services</h2>
            <span className="textoD">Our team specializes in:
            <ul>
              <li>Maintanance and testing of the water quality using only the best products</li>
              <li>Installation and repair of equipment, this includs bombs, filters sanitation equipment, jet blower, and others</li>
              <li>Automatization of your poll system (you can manage from your phone)</li>
              <li>Revitalization pools that has been closed for a long time</li>
              <li>Plaster reparation</li>
              <li>Plaster treatment with acid wash for stains</li>
            </ul>

            </span>
        </div>

        <div className="renovationF">
            <SignupForm></SignupForm>
        </div>
      </div>
      <div className="caja1">
      <div className="caja">
          <Carrusel></Carrusel>
      </div>
      </div>

        <BottomBanner></BottomBanner>
 
      <script src="scroll.js"></script>
    </div>
    )
  }
