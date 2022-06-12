import { useState, useEffect } from 'react';

const Price = (props) => {
  const apiKey = '11AE1E4A-6FA3-4A35-9F16-F7CB4523B769'
  // Capture coin symbol from route props
  const symbol = props.match.params.symbol;

  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
  // Initialize state to hold coin data received from API
  const [coin, setCoin] = useState(null);
  // Define a function to perform the AJAX
  const getCoin = async () => {
    const response = await fetch(url) // get data from api
    const data = await response.json() // convert json data into js
    setCoin(data)
  };

  // invoke a call to useEffect to run an effect once the component loads
  useEffect(() => {
    getCoin()
  }, []);
  // define some functionality to show a loading message until data is loaded
  const loading = () => {
    return <h1>Now Loading...</h1>
  }

  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    )
  };

    return coin ? loaded() : loading();
  };
  
  export default Price;