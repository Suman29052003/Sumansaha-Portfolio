import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="w-full h-16 bg-white flex items-center justify-between px-4 md:justify-around fixed z-10">
      <div className="name text-xl font-semibold">
        Suman's <span className="text-[#319bff]">Portfolio</span>
      </div>
      <div className="nav-links hidden md:block">
        <ul className="flex gap-6 text-lg font-medium">
          <li>
            <a href="#home" className="">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="">
              Skills
            </a>
          </li>
          <li>
            <a href="#service" className="">
              Service
            </a>
          </li>
          <li>
            <a href="#projects" className="">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="email hidden md:block">
        <span className="text-[#319bff] flex gap-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/15889/15889542.png"
            alt=""
            className="w-[26px]"
          />
          sumansahaweb.dev@gmail.com
        </span>
      </div>
      <div className="menu md:hidden block" onClick={handleMenu}>
        {menu ? (
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
            alt="Close menu"
            className="w-[24px]"
          />
        ) : (
          <img
            src="https://cdn-icons-png.flaticon.com/512/5259/5259008.png"
            alt="Open menu"
            className="w-[24px]"
          />
        )}
      </div>
      {/* Mobile Menu */}
      {menu && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-6 py-4 text-lg font-medium">
            <li>
              <a href="#home" className="" onClick={handleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="" onClick={handleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="" onClick={handleMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#service" className="" onClick={handleMenu}>
                Service
              </a>
            </li>
            <li>
              <a href="#projects" className="" onClick={handleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="" onClick={handleMenu}>
                Contact
              </a>
            </li>
            <li>
              <span className="text-[#319bff] flex gap-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/15889/15889542.png"
                  alt="Email icon"
                  className="w-[26px]"
                />
                sumansahaweb.dev@gmail.com
              </span>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
