import React from "react";
import "./isometric.css";
import Isometric from "./assets/isometric.png";
class Iso extends React.Component {
    render() {
        return (
            <div className="iso">
                <div className="isoone">
                    <img src={Isometric} alt={"one"} />
                    <img src={Isometric} alt={"two"} />
                    <img src={Isometric} alt={"three"} />
                    <img src={Isometric} alt={"four"} />
                </div>
            </div>
        );
    }
}

export default Iso;
