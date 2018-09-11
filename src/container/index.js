import React from 'react';
import Header from './Header';
import Intro2 from './Intro2';
import Features from './Features';
import SecondFeatures from './SecondFeatures';
import Signup from './Signup';
import Price from './Price';
import Footer from './Footer';
import Customer from './Customer';
import Brand from './Brand';
import Macbook from './Macbook';
import LPicture from './LPicture';
import RPicture from './RPicture';

class Home extends React.Component {

    render(){
        return(
            <React.Fragment>
                <Header />
                <Intro2 />
                <Macbook />
                <Brand />
                <Features />
                <LPicture />
                <RPicture />
                <SecondFeatures />
                <Customer />
                <Price />
                <Signup />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home;