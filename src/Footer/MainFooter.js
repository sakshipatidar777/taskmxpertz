import React from 'react';
import { FaFacebookF , FaTwitter,FaGooglePlusG, FaWifi } from "react-icons/fa";

function MainFooter() {
  return (
    <>
        <div className="cantainer">
        <footer>
            <div className="row">
                <div className="col-md-6">
                    <p>Design By Elegant Themes|Powered by wordPress</p>
                </div>
            </div>
          
                <div className="col-md-6">
                <span><FaFacebookF /></span>
                <span><FaTwitter /></span>
                <span><FaGooglePlusG /></span>
                <span><FaWifi /></span>
                   
                </div>
        
        </footer>

        </div>
    </>
  )
}

export default MainFooter;
