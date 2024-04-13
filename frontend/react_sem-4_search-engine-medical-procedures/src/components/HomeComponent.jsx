import { Link } from "react-router-dom";

import { registrationPath } from "../config/defaults.js";

const HomeComponent = () => {
    return (
        <>
            <h1 className="fw--600">Welcome to Procedure Archive</h1>
            <div>
                <p>
                    Here, you can utilize our service to access comprehensive
                    data pertaining to a wide range of medical procedures.
                </p>
                <p>
                    To get started, registration is required for all users.
                    Simply visit{" "}
                    <Link to={registrationPath}>registration page</Link> to
                    create your account. Once registered, you'll be seamlessly
                    redirected to our login page.
                </p>
                <p>
                    From there, you can effortlessly log in using your
                    credentials. Once logged in, you can use keywords to search
                    our database for information on the medical procedures
                    you're interested in
                </p>
            </div>
        </>
    );
};

export default HomeComponent;
