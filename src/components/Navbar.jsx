import { Link } from "react-router";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="navbar flex items-center justify-between px-7 py-2">
      <Link to={"#"} className="">
        <img
          src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1745458898/homchapel/cropped_logo_ccdry3.png"
          alt="logo"
          className="logo max-w-[100px] "
        />
      </Link>
      <button className="menuBt text-[2.5rem]">
        <IoMenu />
      </button>
    </nav>
  );
};

export default Navbar;
