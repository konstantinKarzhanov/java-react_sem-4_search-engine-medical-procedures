import { useLocation } from "react-router-dom";

import AuthenticationComponent from "../components/AuthenticationComponent.jsx";

const LoginPage = () => {
    const { pathname } = useLocation();

    return <AuthenticationComponent pathname={pathname} />;
};

export default LoginPage;
