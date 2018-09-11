import React from 'react';
import './asset/index.css';

class Footer extends React.Component {

    render(){
        return(
            <div className="section footer">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-4">
                        <h2>Start. ly</h2>
                        <p className="mt-3 ml-1 text-muted" >Start.ly is a SASS software landing page template.</p>
                        <p className="ml-1">
                            <a href="##">Purchase now →</a>
                        </p>
                     </div>
                     <div className="col-sm-2">
                       <ul className="list-unstyled footer-link ml-1">
                           <li>Portfolio</li>
                           <li>About us</li>
                           <li>Services</li>
                           <li>Contact</li>
                       </ul>
                     </div>
                     <div className="col-sm-2">
                        <ul className="list-unstyled footer-link ml-1">
                            <li>Terms</li>
                            <li>Privacy</li>
                        </ul>
                     </div>
                     <div className="col-sm-2">
                        <ul className="list-unstyled footer-link ml-1">
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Linkedin</li>
                        </ul>
                     </div>
                     <div className="col-sm-2">
                        <a href="##" className="btn btn-sm btn-outline-primary">Go to top</a>
                     </div>
                  </div>
                  <div className="footer-end">
                      <small>Copyright © 2018 All rights reserved. Start.ly</small>
                  </div>
               </div>

            </div>
        )
    }
}


export default Footer;