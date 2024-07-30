// src/context/RouteContext.js
import React, { createContext, useContext, useState } from 'react';

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  const [previousRoute, setPreviousRoute] = useState(null);
  // console.log('RouteProvider previousRoute:', previousRoute);

  return (
    <RouteContext.Provider value={{ previousRoute, setPreviousRoute }}>
      {children}
    </RouteContext.Provider>
  );
};

export const useRoute = () => useContext(RouteContext);
