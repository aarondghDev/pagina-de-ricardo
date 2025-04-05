import { useEffect } from "react";
import popUp from './imagenes/popUp.jpg'

const Popup = ({ onClose }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
       <div className="text">
       <div className="positioncT">
       <button className="cerrarTop" onClick={onClose}>x</button>

       </div>

       <div>
        <img className='imgPopup' src={popUp} alt='logo'></img>
       </div>

        {/* <h2>¡SUPER DISCOUNTS FOR LIMITED TIME!</h2>
        <p>Spring opening and winter closing, $650 each, only with the best products and chemicals so you can enjoy your pool with peace of mind. 
        
        Pool service, surface cleaning, vacuuming for up to 30 minutes, skimmer cleaning, cleaning of robot cleaner filters if used and water balance, we include the best quality chemicals, $200.
        <br></br>
        <br></br>
        Open, maintain and close your pool with us and enjoy the super discount and save up to $300 just on opening and closing, leaving it at $500 each.
        <br></br>
        <br></br>

        If you take the weekly service enjoy the super discount, leaving each service at $150, you will save $200 per month or in other words it is the equivalent of one FREE service per month.
        <br></br>
        <br></br>

        Throughout the season you will save more than $1,100 when you purchase the complete package. 
        <br></br>
        <br></br>

        Prices for pools up to 40,000gal. For larger pools there are also discounts to consult, contact us.</p> */}
        </div>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Popup;
