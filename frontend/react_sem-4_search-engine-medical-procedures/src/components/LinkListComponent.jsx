import { Link } from "react-router-dom";

const LinkListComponent = ({ linkMap }) => {
    const renderList = (map) => {
        return (
            <ul>
                {[...map.entries()].map(([name, link], index) => (
                    <li key={index}>
                        <Link to={link}>{name}</Link>
                    </li>
                ))}
            </ul>
        );
    };

    return renderList(linkMap);
};

export default LinkListComponent;
