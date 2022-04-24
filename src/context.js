import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSubmited, setIsSubmited] = useState(false);
  const [rating, setRating] = useState();

  return (
    <AppContext.Provider
      value={{ isSubmited, setIsSubmited, rating, setRating }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
