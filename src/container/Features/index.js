import React from 'react';
import Data from './asset/Data';
import "./asset/index.css";

class Features extends React.Component {

    

    render() {
        var data = Data.map((val)=>{
            return(
                <div className="col-md-6 col-lg-4">
                    <div className="features_layout">
                        <div className="display marginTop2">
                            <div className="display-body align-text-center ">
                                <div className="backgrounds" style={{backgroundImage:`url(${val.background})`}}></div>
                                <div className="features_content">
                                <span className={val.icon}></span>
                                <h5>{val.title}</h5>
                                <p>{val.content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
         return(
            <div className="section bg-light" id="features">
              <div className="container">
                <div className="row">
                  {data}
               </div>
              </div>
            </div>
        )
    }
}



export default Features;