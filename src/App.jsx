import React, {useState} from 'react';
import Request from 'request';

import './styles/App.css'
import menu from "./images/menu.png";
import BitcoinCenter from './ViewComponents/BitcoinCenter';
import Header from './ViewComponents/Header';

function App(){

    // Make API Request -------------------------------------------------|

    const [currency, setCurrency] = useState("");
    const [exchange, setExchange] = useState("");

    function makeCurrency(event) {
            setCurrency(event.target.value); 
    };

    function makeExchange(event) {
        setExchange(event.target.value); 
    };

    function makeRequest() {

        const url = "https://rest.coinapi.io/v1/exchangerate/" + currency + "/" + exchange + "?apikey=";
        const apiKey = "5A2AC7E4-E57E-4DAA-B68C-A2772C2BE16A";

        Request(url + apiKey, (err, response, body) => {
            if (!err) {
                var data = JSON.parse(body);
                setPriceTitle(Math.floor(data.rate)+" "+exchange);
                console.log(body);
                document.getElementById('mySidenav').style.width = "0"
                document.getElementById('navLine').style.right = "0"
                return navOpen = false;
            } else {
                console.log(err);
            }
    })
};

    // Toggle Nav-bar -------------------------------------------------|

var navOpen = false;

function toggle(){
    if (navOpen === false) {
        document.getElementById('mySidenav').style.width = "400px"
        document.getElementById('navLine').style.right = "400px"
        return navOpen = true;
      } 
    if (navOpen === true) {
        document.getElementById('mySidenav').style.width = "0"
        document.getElementById('navLine').style.right = "0"
        return navOpen = false;
      }
}

const [priceTitle, setPriceTitle] = useState()

    // View Components -------------------------------------------------|

return (
    <div>
        <header>
            <div id="mySidenav" className="sidenav">
                <div>

                    <div className="selectorLeft">
                        <select className="selectorStyle" onChange={makeCurrency} name="currency">
                        <option>Currency</option>
                        <option value="BTC">BTC</option>
                        <option value="LTC">LTC</option>
                        <option value="ETH">ETH</option>
                        </select>   
                    </div>

                    <div className="selectorRight">
                    <select className="selectorStyle" onChange={makeExchange} name="exchange">
                    <option>Exchange</option>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                    </select> 
                    </div> 
                
                </div>
            <button onClick={makeRequest} className="mainButton"><p>search</p></button>
            </div>
        </header>

        <section className="background">
            <Header />
            <img onClick={toggle} id="hamburger" src={menu} alt=""/>
            <div id="navLine"></div>
            <h1 className="priceTitle">{priceTitle}</h1>
            <BitcoinCenter />
        </section>
    </div>
    )
};

export default App;