const fetchJSONData = async (url, options) => {
    try {
        const request = await fetch(url, options);
        const response = await request.json();

        console.log(response);

        return {
            body: response,
            statusCode: request.status,
        };
    } catch ({ name, message }) {
        console.error(`${name}: ${message}`);
    }
};

const getData = async (url) => {
    console.log("debug: getData");

    const options = {
        method: "get",
        credentials: "include",
    };

    return await fetchJSONData(url, options);
};

const submitFormData = async (url, dataObj) => {
    console.log("debug: submitFormData");
    const options = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(dataObj),
    };

    return await fetchJSONData(url, options);
};

const sendLogoutRequest = async (url) => {
    console.log("debug: sendLogoutRequest");

    try {
        const request = await fetch(url, { method: "post" });

        return request.status;
    } catch ({ name, message }) {
        console.error(`${name}: ${message}`);
    }
};

export { getData, submitFormData, sendLogoutRequest };
