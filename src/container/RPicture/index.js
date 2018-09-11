import React from 'react';
import picture from './assets/picture2.jpg';
import './assets/index.css';

class RPicture extends React.Component {

    render(){
        return(
            <div className="section">
              <div className="container">
                 <div className="row align-item-center">
                     <div className="col-sm-4">
                        <span className="lnr lnr-smile margin-bottom1"></span>
                        <h3>Chart, Diagrams & More</h3>
                        <p className="margin-bottom1">Reprehenderit nemo quod tempore doloribus ratione
                         distinctio quis quidem vitae sunt reiciendis, molestias omnis soluta?
                        </p>
                     </div>
                     <div className="col-sm-8">
                       <img src={picture} alt="Right" className="rpicture rpicture-layout" />
                     </div>
                 </div>
              </div>
            </div>
        )
    }
}

export default RPicture;