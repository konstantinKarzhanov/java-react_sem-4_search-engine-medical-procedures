const ProcedureComponent = ({ data }) => {
    return (
        <h1 className="fw--600">
            {JSON.stringify(data) ||
                "no content to display yet, check the console"}
        </h1>
    );
};

export default ProcedureComponent;
