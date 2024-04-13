import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { getData } from "../api/serverAPI.js";
import { baseURI } from "../config/defaults.js";

const AccountComponent = ({ userData }) => {
    const { pathname } = useLocation();
    const [data, setData] = useState();

    const url = baseURI + pathname;

    useEffect(() => {
        (async () => {
            const { body } = await getData(url);

            setData(body);
        })();
    }, []);

    return (
        <>
            <h1 className="fw--600">{`${userData}, welcome to your personal account`}</h1>
            <p>{JSON.stringify(data)}</p>
        </>
    );
};

export default AccountComponent;
