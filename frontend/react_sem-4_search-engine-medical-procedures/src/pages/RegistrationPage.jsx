import { useLocation } from "react-router-dom";

import AuthenticationComponent from "../components/AuthenticationComponent.jsx";

const RegistrationPage = () => {
    const { pathname } = useLocation();
    const title = "registration";

    return <AuthenticationComponent pathname={pathname} title={title} />;
};

export default RegistrationPage;
