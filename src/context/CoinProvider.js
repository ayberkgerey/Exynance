import React, {useState, useEffect} from 'react';
import CoinGecko from '../api/CoinGecko';

const CoinContext = React.createContext();

const CoinProvider = (props) => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <CoinContext.Provider value={{coins, setCoins, isLoading}}>
      {props.children}
    </CoinContext.Provider>
  );
};

export {CoinProvider, CoinContext};
