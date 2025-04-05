import React from "react";
import { Link } from 'react-router-dom';

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
                <span>We  provide comprehensive maintenance services for residential pools, as well as renovation and remodeling of interior and exterior spaces, standing out for our quality, attention to detail, and commitment to customer satisfaction. </span>
                <Link className='button' to={'/Contact'}> contact us </Link>
                
            </div>

            <img src="https://watercrafters.com/wp-content/uploads/2023/04/renopic3-1024x573.jpg" alt="img"></img>
            <span></span>

            </div>
      <div className="tecnologias">somos una compañia</div>
      <script src="scroll.js"></script>
    </div>
    
    )
  }
