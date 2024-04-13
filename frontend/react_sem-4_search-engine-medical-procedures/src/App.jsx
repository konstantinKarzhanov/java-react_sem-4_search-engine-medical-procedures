import { Routes, Route } from "react-router-dom";

import { MainContextProvider } from "./context/MainContext.jsx";

import HomePage from "./pages/HomePage.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProcedurePage from "./pages/ProcedurePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

import NavigationComponent from "./components/NavigationComponent.jsx";

import "./App.css";

const App = () => {
    return (
        <div className="container container--px flow-spacing--m">
            <MainContextProvider>
                <NavigationComponent />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/account" element={<AccountPage />}>
                        <Route
                            path="registration"
                            element={<RegistrationPage />}
                        />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="logout" />
                    </Route>
                    <Route path="/procedure" element={<ProcedurePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </MainContextProvider>
        </div>
    );
};

export default App;
