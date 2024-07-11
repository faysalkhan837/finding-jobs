import { Link } from "react-router-dom";


const NavLinks = ({list}) => {
    const {name, patch} = list;
    return (
        <div className="w-auto">
            <Link to={patch}><li className="">{name}</li></Link>
        </div>
    );
};

export default NavLinks;