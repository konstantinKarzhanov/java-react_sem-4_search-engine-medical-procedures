const baseURI = "http://localhost:8080";
const homePath = "/";
const procedurePath = "/procedure";
const accountPath = "/account";
const registrationPath = "/account/registration";
const loginPath = "/account/login";
const logoutPath = "/account/logout";

const resourceMap = new Map();

resourceMap.set("home", homePath);
resourceMap.set("procedure", procedurePath);
resourceMap.set("account", accountPath);
resourceMap.set("registration", registrationPath);
resourceMap.set("login", loginPath);
resourceMap.set("logout", logoutPath);

export {
    baseURI,
    homePath,
    procedurePath,
    accountPath,
    registrationPath,
    loginPath,
    logoutPath,
    resourceMap,
};
