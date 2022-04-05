import { useState, useEffect, useRef } from "react";
import logo from "../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleNav = () => {
    if (showMobileNav) {
      setShowMobileNav(false);
    } else {
      setShowMobileNav(true);
    }
  };

  function useOutsideAlerter(ref: React.RefObject<HTMLDivElement>) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowMobileNav(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(wrapperRef);

  return (
    <>
      <div className="navbar w-full h-auto p-5">
        <div className="navbar-container max-w-screen-xl flex justify-between my-0 mx-auto">
          <div className="navbar-brand">
            <NavLink to="/">
              <img src={logo} alt="logo" className="w-32 h-auto" />
            </NavLink>
          </div>
          <ul className="navbar-nav items-center">
            <NavLink to="/adoption">
              <li className="transition-all p-1 mx-6 hover:opacity-70">
                Pets Adoption
              </li>
            </NavLink>
            <NavLink to="/blog">
              <li className="transition-all p-1 mx-6 hover:opacity-70">Blog</li>
            </NavLink>
            <NavLink to="/contact">
              <li className="transition-all p-1 mx-6 hover:opacity-70">
                Contact
              </li>
            </NavLink>
          </ul>

          <div
            onClick={toggleNav}
            className={"hamburger " + (showMobileNav ? "open" : null)}
            ref={wrapperRef}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </div>
        </div>
      </div>

      <div
        className={"mobile-menu " + (showMobileNav ? null : "hidden-nav")}
        id="menu"
      >
        <ul>
          <li>
            <NavLink to="/adoption">Adoption</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        {/* <div className="mobile-menu-bottom">
          <button className="btn btn-dark-outline">Sign in</button>
          <button className="btn btn-dark">Join now</button>
          <div>
            <NavLink to="#">
              <img src={marker} alt="marker" />
              <span>Find a store</span>
            </NavLink>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
