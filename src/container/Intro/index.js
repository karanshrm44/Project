import React from 'react';
import './assets/index.css';
import introback from './assets/introback.jpg';

class Intro extends React.Component {

    render() {
        return(
            <section className="section2">
              <div className="container">
                <div className="row align-item-center">
                   <div className="col-12 col-md-5">
                      <h1 className="intro_title">Best Software Ever</h1>
                      <p className="text-muted margin-bottom1">Holisticly syndicate unique technology after clicks and mortar growth strategies. Credibly expedite frictionless relationships after revolutionary.</p>
                      <p ><a className="btn btn-xl btn-primary" href="##">Get started free</a></p>
                   </div>
                   <div className="col-12 col-md-7 margin-bottomtop1 intro_image">
                     <div className="intro_image_layout">
                        <img className="img-layout" src={introback} alt="videoImage"/>
                     </div>
                   </div>
                </div>
              </div>
              <div className="bg-shape"></div>
              <div className="bg-circle"></div>
              <div className="bg-circle2"></div>
            </section>
        )
    }
}

export default Intro;