const HomeComponent = ({ data }) => {
    return (
        <h1 className="fw--600">{JSON.stringify(data) || "no content yet"}</h1>
    );
};

export default HomeComponent;
