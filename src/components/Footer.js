import React from 'react';
import './Footer.css';



function Footer (){
return (
    <div className="main-footer">
        <div className= "container">
            <div className="row">
                {/* Column1 */}
                <div className="col">
                    <h4>This App Inc</h4>
                    <ul className="list- unstyled">
                        <li> Phinma- University of Pangasinan </li>
                        <li> Colllege of Information Technology </li>
                    </ul>
                </div>
                {/* Column2 */}
            </div>
        </div>
        <hr />
        <div className="row">
            <p className="col-sm">
                &copy;{new Date().getFullYear()} This App | All right reserved | Term Of Service | Privacy 
            </p>
        </div>
    </div>
);
}
export default Footer;