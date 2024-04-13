import { useContext } from "react";
import { Navigate } from "react-router-dom";

import MainContext from "../context/MainContext.jsx";

import ProcedureComponent from "../components/ProcedureComponent.jsx";

const ProcedurePage = () => {
    const { isAuthenticated } = useContext(MainContext);

    return (
        <>
            <h1 className="fw--600">Procedure Archive</h1>
            {isAuthenticated ? (
                <ProcedureComponent />
            ) : (
                <Navigate to="/" replace />
            )}
        </>
    );
};

export default ProcedurePage;
