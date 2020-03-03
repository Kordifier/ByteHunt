import React from 'react';
import '../styles/App.css'
import BitcoinCircle from '../images/Bitcoin-Circle.png';

function BitcoinCenter() {
    return(
        <div id="colorCircleContainer">
        <div id="colorCircleOuter">
        </div>
        <div id="colorCircle">
        </div>
        <img className="bitcoin-logo" src={BitcoinCircle} alt="Bitcoin"/>
        <div id="colorCircleInner">
        </div>
        </div>
    );
}

export default BitcoinCenter;