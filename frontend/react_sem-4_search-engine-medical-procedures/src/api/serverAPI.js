const fetchJSONData = async (url, options) => {
    try {
        const request = await fetch(url, options);
        const response = await request.json();

        console.log(response);
    } catch ({ name, message }) {
        console.error(`${name}: ${message}`);
    }
};

const getData = (url) => {
    const options = {
        method: "get",
        credentials: "include",
    };

    fetchJSONData(url, options);
};

const submitFormData = (url, dataObj) => {
    const options = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(dataObj),
    };

    fetchJSONData(url, options);
};

const sendLogoutRequest = async (url) => {
    try {
        const request = await fetch(url, { method: "post" });

        console.log(request.status);
    } catch ({ name, message }) {
        console.error(`${name}: ${message}`);
    }
};

export { getData, submitFormData, sendLogoutRequest };
