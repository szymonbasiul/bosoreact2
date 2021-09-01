import React from 'react';
import ImgPicker from '../reusable_functions/ImgPicker';
import '../styles/Footer.css';


function Footer() {
    return (
        
    <div className="footer">
        <div className="social-media">
            <div className="facebook">
                <img className="footer-sizer" src={ImgPicker("fapbuk")} alt="facebook" />
            </div>
            <div className="linkedin">
                <img className="footer-sizer" src={ImgPicker("linkredwin")} alt="linked-in" />
            </div>
        </div>
    </div>

    );
}

export default Footer;