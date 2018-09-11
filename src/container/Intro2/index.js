import React from 'react';
import './assets/index.css';

class Intro2 extends React.Component {
    render()
    {
        return(
         <div className="intro2margin bg-light">
            <div className="jumbotron align-text-center  intro2">
               <div className="container">
                   <h1>Perfect Software Landing Page</h1>
                   <p>Something short and leading about your website, 
                     its contents and the creator etc. Make it short and sweet
                   </p>
                   <p>
                       <a className="btn intro2-button btn-primary" href="##">Get Started Free</a>
                       <a className="btn intro2-button btn-outline-primary"href="##">See Features</a>
                   </p>
             
               </div>
               <div className="bg-shapes"></div>
              <div className="bg-circles"></div>
              
            </div>
         </div>
        )
    }
}


export default Intro2;