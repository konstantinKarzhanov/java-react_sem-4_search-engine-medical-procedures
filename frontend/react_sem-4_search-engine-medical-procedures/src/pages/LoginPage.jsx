import { useLocation } from "react-router-dom";

import AuthenticationComponent from "../components/AuthenticationComponent.jsx";

const LoginPage = () => {
    const { pathname } = useLocation();
    const title = "login";

    return <AuthenticationComponent pathname={pathname} title={title} />;
};

export default LoginPage;
