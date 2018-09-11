import React from 'react';
import picture from './asset/picture1.png';
import './asset/index.css';

class LPicture extends React.Component {

    render(){
        return(
            <div className="section">
               <div className="container">
                    <div className="row align-item-center">
                        <div className="col-sm-8">
                           <div className="lpicture_layout lpicture_margin lpicture_marginright lpicture_marginsmallright">
                               <img src={picture} alt="leftPicture" />
                           </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="display">
                            <div className="display-body">
                                <span className="lnr lnr-thumbs-up margin-bottom1"></span>
                                <h3>Perfect Dashboard</h3>
                                <p className="margin-bottom1">Reprehenderit nemo quod tempore doloribus ratione 
                                   distinctio quis quidem vitae sunt reiciendis, 
                                   molestias omnis soluta?
                                </p>
                            </div>
                          </div>
                        </div>
                    </div>
               </div>
            </div>
        )
    }
}

export default LPicture;