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

export { getData, submitFormData };
