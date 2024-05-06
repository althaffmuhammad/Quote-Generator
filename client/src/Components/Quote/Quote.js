import React, {useState} from 'react';
import './Quote.css';
import reload_icon from '../../Assets/icons8-cart-50.png';

const Quote = () => {
  let quotes = [];

  async function LoadQuotes () {
    const response = await fetch ('https://type.fit/api/quotes');
    quotes = await response.json ();
  }

  const [quote, setQuote] = useState ({
    text: 'kjhjkal;alskdjhjks sldkfjhjskalksdj kjhdjsklaskdjf',
    author: 'john smith',
  });

  const random = () => {
    const slelect = quotes[Math.floor (Math.random () * quotes.length)];
    setQuote (slelect);
  };

  LoadQuotes ();
  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line" />
        <div className="bottom">
          <div className="author">{quote.author.split (',')[0]}</div>
          <div className="icons">
            <img src={reload_icon} alt="" onClick={() => random ()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
