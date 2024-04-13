import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import ProcedureFormComponent from "./ProcedureFormComponent.jsx";

import { getData } from "../api/serverAPI.js";
import { baseURI } from "../config/defaults.js";
import serializeFormQuery from "../utils/serializeFormQuery.js";

const ProcedureComponent = () => {
    const { pathname, search } = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = useState();

    useEffect(() => {
        const url = baseURI + pathname + search;

        searchParams.size && getProcedures(url);
    }, [searchParams]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const target = event.target;
        const params = serializeFormQuery(target);

        setSearchParams(params);
    };

    const getProcedures = async (url) => {
        const data = await getData(url);

        setData(data);
    };

    return (
        <>
            <ProcedureFormComponent onSubmit={handleSubmit} />
            <ol>
                {data &&
                    data.map(({ name }, index) => <li key={index}>{name}</li>)}
            </ol>
        </>
    );
};

export default ProcedureComponent;
