import React, {useState} from 'react';

const CoinContext = React.createContext();

const CoinProvider = (props) => {
  const [watchList, setWatchList] = useState([]);

  return (
    <CoinContext.Provider value={{watchList, setWatchList}}>
      {props.children}
    </CoinContext.Provider>
  );
};

export {CoinProvider, CoinContext};
