import { Link } from "react-router-dom";


const NavLinks = ({list}) => {
    const {name, patch} = list;
    return (
        <div className="w-auto">
            <Link to={patch}><li className=" max-md:hover:bg-slate-300 rounded-md">{name}</li></Link>
        </div>
    );
};

export default NavLinks;