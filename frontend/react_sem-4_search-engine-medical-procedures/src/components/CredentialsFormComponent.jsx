const CredentialsFormComponent = ({ onSubmit, action }) => {
    return (
        <form onSubmit={onSubmit} method="post" action={action}>
            <label htmlFor="username">
                <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="username"
                />
            </label>
            <label htmlFor="password">
                <input id="password" name="password" type="password" />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CredentialsFormComponent;
