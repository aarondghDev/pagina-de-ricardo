import React from 'react';
import logoAbajo from './imagenes/logoAbajo.png'
import './index.css'
import { Link } from 'react-router-dom';


function BottomBanner()  {
    return (
        <div className='bottomBanner'>
        <div className='bottomSuperior'>
            <div className='superiorIzq'>
            <a href="https://aaron-garciah.com/" target="_blank"><img src={logoAbajo} alt='logo'></img>
            </a>
            <a className='bottomNumbers' href='tel:+14438329567'>443-832-9567
            </a>
            <a className='bottomNumbers' href='mailto:info@courtoiscontractor.com'>info@courtoiscontractor.com</a>
            </div>

            <div className='superiorDerecha'>
                <div>
                    <h2>Hours</h2>
                    <span>Mondays to Fridays: 8am-8pm</span>
                </div>
                <br></br>
                <div>
                    <h2>Location</h2>
                    <span>Maryland, North Virginia & Washington DC.</span>
                </div>
                <button >
                <nav>
                <Link style={{ textDecoration: 'none' }} to={'/Contact'}>Contact</Link>
                </nav>
                </button>
                </div>
        </div>

        </div>
        

        );
    }


export default BottomBanner;
