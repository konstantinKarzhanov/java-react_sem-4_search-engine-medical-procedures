import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import MainContext from "../context/MainContext.jsx";

import LinkListComponent from "./LinkListComponent.jsx";

import { sendLogoutRequest } from "../api/serverAPI.js";
import {
    baseURI,
    homePath,
    logoutPath,
    resourceMap,
} from "../config/defaults.js";

const NavigationComponent = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(MainContext);
    const navigate = useNavigate();

    const url = baseURI + logoutPath;

    const handleLogout = async () => {
        console.log("debug: handleLogout");
        const statusCode = await sendLogoutRequest(url);

        if (statusCode == 200) setIsAuthenticated(false);
    };

    const handleClick = (event) => {
        const target = event.target;
        const logoutLink = target.closest(`a[href="${logoutPath}"`);

        if (logoutLink) {
            isAuthenticated && handleLogout();

            navigate(homePath);
        }
    };

    return (
        <div>
            <LinkListComponent onClick={handleClick} linkMap={resourceMap} />
        </div>
    );
};

export default NavigationComponent;
