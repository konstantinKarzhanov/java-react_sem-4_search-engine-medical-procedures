const ProcedureComponent = ({ data }) => {
    return (
        <div>
            {JSON.stringify(data) ||
                "no content to display yet, check the console"}
        </div>
    );
};

export default ProcedureComponent;
