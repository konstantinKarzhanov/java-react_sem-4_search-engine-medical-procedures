import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import MainContext from "../context/MainContext.jsx";

import CredentialsFormComponent from "./CredentialsFormComponent";

import {
    baseURI,
    procedurePath,
    registrationPath,
    loginPath,
} from "../config/defaults.js";

import { submitFormData } from "../api/serverAPI.js";

const AuthenticationComponent = ({ pathname, title }) => {
    const { setIsAuthenticated } = useContext(MainContext);
    const navigate = useNavigate();

    const url = baseURI + pathname;

    const handleRedirect = () => {
        switch (pathname) {
            case loginPath:
                navigate(procedurePath);
                break;

            case registrationPath:
                navigate(loginPath);
                break;
        }
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();

        const { username, password } = event.target;

        const formDataObj = {
            name: username.value,
            password: password.value,
        };

        const statusCode = submitFormData(url, formDataObj);

        if (statusCode == 200) {
            pathname === loginPath && setIsAuthenticated(true);

            handleRedirect(pathname);
        }
    };

    return (
        <CredentialsFormComponent
            onSubmit={handleOnSubmit}
            title={title}
            action={url}
        />
    );
};

export default AuthenticationComponent;
