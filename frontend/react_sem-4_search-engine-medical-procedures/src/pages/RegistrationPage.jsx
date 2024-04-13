import { useLocation } from "react-router-dom";

import AuthenticationComponent from "../components/AuthenticationComponent.jsx";

const RegistrationPage = () => {
    const { pathname } = useLocation();

    return <AuthenticationComponent pathname={pathname} />;
};

export default RegistrationPage;
