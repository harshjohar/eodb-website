import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [menustate, setMenustate] = useState(false) ;
    const openmenu = () => {
        var x = document.getElementsByClassName('navbar-links')[0] ;
        if(menustate === false) {
            x.classList.remove("-translate-y-96") ;
            setMenustate(!menustate) ;
        }
        else {
            x.classList.add("-translate-y-96") ;
            setMenustate(!menustate) ;
        }
    }
    return (
        <header className="flex justify-between lg:justify-start lg:space-x-8 z-50 bg-teal-900 px-5 lg:px-20">
            <div className="flex items-center z-50 space-x-20 py-4 ">
                <Link to={"/"} className="flex space-x-6">
                    <img
                        src="/assets/images/chandigarh_emblem.png"
                        alt=""
                        className="w-10 scale cursor-pointer object-contain"
                    />
                    <h1 className="text-white text-[14px] py-1 border-white/70 w-[208px] border-r-2">Industries Deptartments
                        Chandigarh Administration
                    </h1>
                </Link>
            </div>
            <div className="navbar-links w-full lg:w-fit transition-all items-center -translate-y-96 lg:translate-y-0 absolute flex right-0 top-[75px] text-md bg-teal-900 z-20 space-y-4 py-4 px-7 lg:space-y-0 lg:px-0 lg:static flex-col space-x-6 lg:text-sm  lg:flex-row text-white">
            <Link to={"/"}>Home</Link>
                <Link className="" to={"/about"}>About Us</Link>
                <Link to={"/schemes"}>Schemes</Link>
                <Link to={"/udyam"}>Udyam registration</Link>
                <Link to={"/eodb"}>EODB</Link>
                <Link  to={"/info"}>Information Wizard</Link>
                <Link  to={"/contact"}>Contact</Link>
            </div>
            <div  className="lg:hidden z-50">
                <img onClick={openmenu} className="h-8 my-5 mx-2" alt="" src={"assets/images/menu.png"}/>
            </div>
        </header>
    );
}

export default Navbar;
