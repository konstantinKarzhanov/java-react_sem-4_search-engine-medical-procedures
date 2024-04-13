import { createContext, useState, useEffect } from "react";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        console.log("MainContextProvider, isAuthenticated: " + isAuthenticated);
    }, [isAuthenticated]);

    return (
        <MainContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </MainContext.Provider>
    );
};

export { MainContextProvider };
export default MainContext;
