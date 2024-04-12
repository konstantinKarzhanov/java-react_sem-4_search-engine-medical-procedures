import { createContext } from "react";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    return (
        <MainContext.Provider value={{ testContext }}>
            {children}
        </MainContext.Provider>
    );
};

export { MainContextProvider };
export default MainContext;
