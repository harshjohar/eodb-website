import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="flex justify-between bg-teal-900 px-20">
            <div className="flex items-center space-x-20 py-4">
                <Link to={"/"}>
                    <img
                        src="/assets/images/chandigarh_emblem.png"
                        alt=""
                        className="w-10 scale-[1.6] cursor-pointer object-contain"
                    />
                </Link>
            </div>
            <div className="hidden items-center space-x-10 md:inline-flex text-white">
                <Link to={"/about"}>About Us</Link>
                <Link to={"/schemes"}>Schemes</Link>
                <Link to={"/udyam"}>Udyam registration</Link>
                <Link to={"/eodb"}>EODB</Link>
                <Link to={"/info"}>Information Wizard</Link>
                <Link to={"/contact"}>Contact</Link>
            </div>
        </header>
    );
}

export default Navbar;
