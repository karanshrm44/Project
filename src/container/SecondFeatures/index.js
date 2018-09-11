import React from 'react';
import Data from './assets/Data';
import './assets/index.css';

class SecondFeatures extends React.Component {

    render()
    {
        var data = Data.map((val)=>{
         return(
             <div className="col-md-6 col-lg-4">
               <div className="display">
                   <div className="display-body text-center">
                       <span className={val.icon}></span>
                       <h5 className="mt-0">{val.title}</h5>
                       <p>{val.content}</p>
                   </div>
               </div>
             </div>
         )
        })
        return(
            <div className="section bg-light py-lg">
                 <div className="container">
                     <div className="row">
                        {data}
                     </div>
                 </div>
            </div>
        )
    }
}

export default SecondFeatures;