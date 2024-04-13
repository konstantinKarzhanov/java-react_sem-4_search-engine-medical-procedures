import { useLocation } from "react-router-dom";

import AuthenticationComponent from "../components/AuthenticationComponent.jsx";

const LoginPage = () => {
    const { pathname } = useLocation();

    return (
        <>
            <h1 className="fw--600">Login page</h1>
            <AuthenticationComponent pathname={pathname} />
        </>
    );
};

export default LoginPage;
