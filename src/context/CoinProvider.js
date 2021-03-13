import React, {useState,useEffect} from 'react';
import CoinGecko from "../api/CoinGecko";

const CoinContext = React.createContext();

const CoinProvider = (props) => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await CoinGecko.get('/coins/markets', {
        params: {
          vs_currency: 'usd',
        },
      });
      //console.log('response.data: ');
      //console.log(response.data);
      setCoins(response.data);
      setIsLoading(false);
    };
    fetchData();
  });

  return (
    <CoinContext.Provider value={{coins, setCoins, isLoading}}>
      {props.children}
    </CoinContext.Provider>
  );
};

export {CoinProvider, CoinContext};
