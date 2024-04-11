import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import ProcedureComponent from "../components/ProcedureComponent.jsx";

import { getData } from "../api/serverAPI.js";
import { baseURI } from "../config/defaults.js";

const ProcedurePage = () => {
    const { pathname, search } = useLocation();
    const [data, setData] = useState();

    const url = baseURI + pathname + search;

    useEffect(() => {
        getData(url);
    }, []);

    return <ProcedureComponent data={data} />;
};

export default ProcedurePage;
