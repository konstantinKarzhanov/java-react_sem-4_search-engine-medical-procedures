import FormComponent from "./FormComponent";

import { baseURI } from "../config/defaults.js";
import { submitFormData } from "../api/serverAPI.js";

const AuthenticationComponent = ({ pathname, title }) => {
    const url = baseURI + pathname;

    const handleOnSubmit = (event) => {
        event.preventDefault();

        const { username, password } = event.target;

        const formDataObj = {
            name: username.value,
            password: password.value,
        };

        submitFormData(url, formDataObj);
    };

    return (
        <FormComponent onSubmit={handleOnSubmit} title={title} action={url} />
    );
};

export default AuthenticationComponent;
