const baseURI = "http://localhost:8080";
const resourceMap = new Map();

resourceMap.set("home", "/");
resourceMap.set("procedure", "/procedure");
resourceMap.set("account", "/account");
resourceMap.set("registration", "/account/registration");
resourceMap.set("login", "/account/login");
resourceMap.set("logout", "/account/logout");

export { baseURI, resourceMap };
