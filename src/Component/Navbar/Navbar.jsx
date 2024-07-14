
import "./nav.css"
import NavLinks from "../NavLinks/NavLinks";
import { Link } from "react-router-dom";
import { LuMenuSquare } from "react-icons/lu";
import { useContext, useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const {user, logOut} = useContext(AuthContext);
    const navLinks = [
        { id: 1, name: "home", patch: "/" },
        { id: 2, name: "Add Job", patch: "/addjob" },
        { id: 3, name: "My posted job", patch: "/myPostedJob" },
        { id: 4, name: "My Bids", patch: "/mybid" },
        { id: 5, name: "Bid Request", patch: "bidrequest/" },
    ]
    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))
    }

    return (
        <div className="containerr fixed flex items-center text-white justify-between hover:bg-slate-900 duration-500 z-10 max-w-7xl h-20 px-3 py-1">
            <div className="flex items-center">
                <Link to="/"><img src="/logo1.png" className="max-w-20" /></Link>
                <h1 className=" font-bold">Carrier Bild</h1>
            </div>
            <div className="">
                <div onClick={()=>setOpen(!open)} className="lg:hidden">
                    {
                        open === true? <LuMenuSquare className="" /> :
                        <FaRegWindowClose />
                    }
                </div>
                <div className="">
                    <ul className={`gap-x-4 p-2 rounded-md lg:con lg:flex lg:static absolute duration-1000 lg:bg-transparent bg-slate-900  ${open? '-top-64':'top-12' }`}>
                        {navLinks.map(list => <NavLinks key={list.id} list={list}></NavLinks>)}
                    </ul>
                </div>
            </div>
            <div>
            {
                user ? <button onClick={handleLogOut} className="px-4 py-2 hover:bg-slate-300 hover:text-black duration-500 rounded-md bg-blue-500">Log out</button> : 

                <Link to='/login'><button className="px-4 py-2 hover:bg-slate-300 hover:text-black duration-500 rounded-md bg-blue-500">Login</button></Link>
            }
                
                
            </div>
        </div>
    );
};

export default Navbar;