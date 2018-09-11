import React from 'react';
import './assets/index.css';

class Customer extends React.Component {

    render() {
        return(
            <div className="section">
              <div className="container">
                <div className="section-title text-center">
                    <h3>What our users say</h3>
                    <p>They love it. Read what our customers had to say!</p>
                </div>
                <div className="row">
                   <div className="col-md-4"></div>
                   <div className="col-md-4"></div>
                   <div className="col-md-4"></div>
                </div>
              </div>
            </div>
        )
    }
}

export default Customer;