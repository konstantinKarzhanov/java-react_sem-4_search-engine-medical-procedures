import { useContext } from "react";
import { Navigate } from "react-router-dom";

import MainContext from "../context/MainContext.jsx";

import AccountComponent from "../components/AccountComponent.jsx";

const AccountPage = () => {
    const { isAuthenticated, userData } = useContext(MainContext);

    return (
        <>
            {isAuthenticated ? (
                <AccountComponent userData={userData} />
            ) : (
                <Navigate to="/" replace />
            )}
        </>
    );
};

export default AccountPage;
