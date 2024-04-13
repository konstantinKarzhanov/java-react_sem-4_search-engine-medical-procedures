import { useLocation } from "react-router-dom";

import AuthenticationComponent from "../components/AuthenticationComponent.jsx";

const RegistrationPage = () => {
    const { pathname } = useLocation();

    return (
        <>
            <h1 className="fw--600">Registration page</h1>
            <AuthenticationComponent pathname={pathname} />
        </>
    );
};

export default RegistrationPage;
