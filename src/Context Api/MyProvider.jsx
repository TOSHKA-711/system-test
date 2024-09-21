import React, { createContext, useState } from "react";

// Create a Context
const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [sideBar, setSideBar] = useState(false);

  return (
    <MyContext.Provider value={{ sideBar, setSideBar }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
