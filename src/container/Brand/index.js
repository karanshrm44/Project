import React from 'react';
import Data from './asset/Data';
import './asset/index.css';

class Brand extends React.Component {



    render() {

       var data = Data.map((val)=>{
           return <img src={val.val} alt="logos" />
       })


        return(
            <div className="section2" id="brand">
              <div className="container">
                  <div className="client-logos negative-margin text-center">
                    <p className="text-muted">TRUSTED BY MOST POPULAR BRANDS</p>
                       {data}
                  </div>
              </div>
            </div>
        )
    }
}

export default Brand;