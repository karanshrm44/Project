import React from 'react';
import macbook from './assets/macbook.png';
import macScreen from './assets/macscreen.jpg';
import './assets/index.css';
import Iso from './isometric';

class Macbook extends React.Component {

    render()
    {
        return(
            <div>
            <div className="macbook bg-light">
              <div className="macbook-hero">
                <img src={macbook} alt="macbook" className="img-fluid" />
                <div className="macbook-screen">
                   <img src={macScreen} alt="macScreen" className="img-fluid" />
                </div>
              </div>

                <Iso />
            </div>
            </div>
        )
    }
}

export default Macbook;