import React, { createContext, useState } from 'react';

// Create the context
export const UserContextData = createContext();

// Context provider component
const UserContext = ({ children }) => {
  const [isUserLogin, setIsUserLogin] = useState(false);

  return (
    <UserContextData.Provider value={{ isUserLogin, setIsUserLogin }}>
      {children}
    </UserContextData.Provider>
  );
};

export default UserContext;
