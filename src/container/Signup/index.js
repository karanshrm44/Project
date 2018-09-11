import React from 'react';
import './assets/index.css';

class Signup extends React.Component {

    render()
    {
        return(
            <div className="section signup_back">
              <div className="container">
                    <div className="section-title text-center">
                        <h3>Start your free trial</h3>
                        <p>Signup now. Its free and takes less than 3 minutes</p>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col col-md-5">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Full Name" required/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email Address" required />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" required/>
                                </div>
                                <div className="form-group">
                                    <input  className="btn signup_btn" type="button" value="GET STARTED FOR FREE" />
                                </div>
                        </form>
                    </div>
                   </div>
              </div>
            </div>
        )
    }
}

export default Signup;