import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

import "./App.css";

const App = () => {
    return (
        <div className="container container--px flow-spacing--m">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/account" element={<AccountPage />}>
                    <Route path="registration" element={<RegistrationPage />} />
                    <Route path="login" element={<LoginPage />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
