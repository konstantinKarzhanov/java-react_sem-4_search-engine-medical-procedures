import { useState, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";

import AccountComponent from "../components/AccountComponent.jsx";

import { getData } from "../api/serverAPI.js";
import { baseURI } from "../config/defaults.js";

const AccountPage = () => {
    const { pathname } = useLocation();
    const [data, setData] = useState();

    const url = baseURI + pathname;

    useEffect(() => {
        getData(url);
    }, []);

    return (
        <>
            <AccountComponent data={data} />
            <Outlet />
        </>
    );
};

export default AccountPage;
