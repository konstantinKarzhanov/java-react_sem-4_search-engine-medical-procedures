const serializeFormQuery = (form) => {
    const formDataObj = new FormData(form);
    const queryObj = Object.fromEntries(formDataObj.entries());

    return queryObj;
};

export default serializeFormQuery;
