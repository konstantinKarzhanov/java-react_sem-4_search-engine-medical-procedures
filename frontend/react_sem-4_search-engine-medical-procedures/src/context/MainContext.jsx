import { createContext, useState, useEffect } from "react";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState("Anonymous");

    useEffect(() => {
        console.log("MainContextProvider, isAuthenticated: " + isAuthenticated);
        console.log("MainContextProvider, userData: " + userData);
        isAuthenticated || setUserData("Anonymous");
    }, [isAuthenticated]);

    return (
        <MainContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
                userData,
                setUserData,
            }}
        >
            {children}
        </MainContext.Provider>
    );
};

export { MainContextProvider };
export default MainContext;
