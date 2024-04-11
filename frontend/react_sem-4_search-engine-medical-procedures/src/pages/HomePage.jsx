import { useState, useEffect } from "react";

import HomeComponent from "../components/HomeComponent.jsx";

import { getData } from "../api/serverAPI.js";
import { baseURI } from "../config/defaults.js";

const HomePage = () => {
    const [data, setData] = useState();

    useEffect(() => {
        getData(baseURI);
    }, []);

    return <HomeComponent data={data} />;
};

export default HomePage;
