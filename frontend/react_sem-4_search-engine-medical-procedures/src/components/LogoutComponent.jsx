import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { baseURI } from "../config/defaults.js";
import { sendLogoutRequest } from "../api/serverAPI.js";

const LogoutComponent = () => {
    const { pathname } = useLocation();
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    const url = baseURI + pathname;

    const handleLogout = () => {
        sendLogoutRequest(url);

        setIsLoggedOut(true);
    };

    useEffect(() => {
        isLoggedOut || handleLogout();
    }, [isLoggedOut]);
};

export default LogoutComponent;
