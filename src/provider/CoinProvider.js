import React, {useState} from 'react';

const CoinContext = React.createContext();

const CoinProvider = (props) => {
  const [coins, setCoins] = useState([]);

  return (
    <CoinContext.Provider value={{coins, setCoins}}>
      {props.children}
    </CoinContext.Provider>
  );
};

export {CoinProvider, CoinContext};
