import React from 'react';
import './assets/index.css';

class Header extends React.Component {
   
    constructor() {
        super();
        this.state = {
            navclass:"",
            value:false
        }
    }

    componentDidMount(){
         window.addEventListener('scroll',this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.handleScroll);
    }


    handleScroll=(event)=>{
       let scrollTop2 = window.document.documentElement.scrollTop;
      
         console.log(scrollTop2);
         if(scrollTop2 > 100)
         {
             this.setState({
                 navclass:"headerFixed"
             })
         }

         else {
             this.setState({
                 navclass:""
             })
         }
    }

    handleClick=()=>{
        this.setState({
            value:!this.state.value
        })
    }


    render(){
        let show;
        if(this.state.value) {
            show="show"
        }
        return(
            <header>
              <nav className={`navbar navbar-expand-lg navbar-light headerback ${this.state.navclass}`} id="headers">
                 <div className="container">
                     <a className="navbar-brand" href="##">
                        <h3>Start. ly</h3>
                     </a>
                     <button onClick={this.handleClick} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#site-nav" aria-controls="site-nav" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className={`collapse navbar-collapse ${show} `} id="site-nav">
                        <ul className="navDisplay navLeft navMargin">
                            <li>
                                <a className="navLink" href="##">Features</a>
                            </li>
                            <li>
                                <a className="navLink" href="##">Pricing</a>
                            </li>
                            <li>
                                <a className="navLink" href="##">Blog</a>
                            </li>
                            <li>
                                <a className="navLink" href="##">Pages</a>
                            </li>
                            <li>
                                <a className="navLink" href="##">Help</a>
                            </li>
                            <li>
                                <a className="btn btn-outline-primary" href="##">Login</a>
                            </li>
                            <li>
                                <a className="btn btn-primary" href="##">Sign Up</a>
                            </li>
                        </ul>
                     </div>
                 </div>
              </nav>
            </header>


        )
    }
}

export default Header;