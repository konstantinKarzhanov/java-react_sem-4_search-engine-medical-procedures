import LinkListComponent from "./LinkListComponent.jsx";

import { resourceMap } from "../config/defaults.js";

const NavigationComponent = () => {
    return (
        <div>
            <LinkListComponent linkMap={resourceMap} />
        </div>
    );
};

export default NavigationComponent;
