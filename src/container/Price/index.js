import React from 'react';
import './asset/index.css';
import Data from './asset/data';


class Price extends React.Component{


    render() {
        var data = Data.map((val)=>{
            return <Card {...val} />
        })
        
        return(
            <div className="section price">
              <div className="container">
                  <div className="section-title text-center mt-0 mb-5">
                     <h3>Choose Your Plan</h3>
                     <p>Simple pricing. no hidden charges. Choose a plan fit your needs</p>
                  </div>
                  <div className="row">
                      {data}
                  </div>
              </div>
            </div>
        )
    }
}

const Card = ({title,price,values,highlighted}) => {
    let buttonToggle = highlighted ? 'button_back' : '';
   
    return(
    <div className="col-lg-4">
       <div className="card pricing">
          <div className="card-body">
            <small className="text-muted">{title}</small>
            <h5 className="card-title">{price}</h5>
            <ul className="list-unstyled">
            {
                values.map((val)=>{
                    return <li>{val}</li>
                })

            }
            </ul>
            <p></p>
            <a className={`btn btn-outline-primary btn-xl ${buttonToggle}`}>Choose the plan</a>
          </div>
       </div>
    </div>
    )
}

export default Price;