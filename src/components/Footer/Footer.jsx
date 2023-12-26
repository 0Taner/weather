// import React from 'react'

// function Footer() {
//     return (
//         <footer className="footer">
//           <div className="footer-content">
//             <p>Taner Can AKTÜRK</p>
//             <div className="social-links">
//               <p>
//                  <a href="https://www.linkedin.com/in/taner-can-akt%C3%BCrk/" target="_blank" rel="noopener noreferrer">
//                 LinkedIn:</a>
//               </p>
//               <p> <a href="https://github.com/0Taner" target="_blank" rel="noopener noreferrer">
//                 GitHub
//               </a>
//               </p>
//             </div>
//           </div>
//         </footer>
//       );
//     }
    
//     export default Footer;

import React from 'react';
import "./Footer.css";
import github from '/icons/github.png';
import linkedin from '/icons/linkedin.png';

function Footer() {
  return (
    
    <footer className="footer">
      <div className="footer-content">
        <p> Taner Can AKTÜRK</p>
        <div className="social-links">
          <p>
            <a href="https://www.linkedin.com/in/taner-can-akt%C3%BCrk/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" width="50" height="50" />
            </a>
            <a href="https://github.com/0Taner" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" width="50" height="50" />
            </a> 
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;