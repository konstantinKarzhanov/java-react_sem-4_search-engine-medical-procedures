const FormComponent = ({ onSubmit, title, action }) => {
    return (
        <>
            <h2>{title}</h2>
            <div>
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
            </div>
        </>
    );
};

export default FormComponent;
