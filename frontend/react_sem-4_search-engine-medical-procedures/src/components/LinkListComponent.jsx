import { Link } from "react-router-dom";

const LinkListComponent = ({ onClick, linkMap }) => {
    const renderList = (map) => {
        return (
            <ul onClick={onClick}>
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
