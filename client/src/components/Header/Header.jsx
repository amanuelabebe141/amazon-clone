import React, { useContext } from "react";
import logo from "../../assets/image/logo.png";
import classes from "./Header.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { Data } from "../../DataProvider";
function Header() {
  const [state, dispatch] = useContext(Data);
  const totalItems = state.basket.length || 0;
  return (
    <>
      <header>
        <div className={classes.left}>
          <Link to={"/"}>
            <img src={logo} alt="Amazon logo" />
          </Link>
          <div className={classes.delivery}>
            <FaLocationDot />
            <div>
              <p>Deliver to</p>
              <p>Ethiopia</p>
            </div>
          </div>
        </div>
        <div className={classes.center}>
          <select>
            <option>All</option>
            <option>Trending</option>
            <option>Lowest price</option>
            <option>Quality</option>
          </select>
          <input type="text" />
          <IoSearch />
        </div>
        <div className={classes.right}>
          <div className={classes.language}>
            <img
              src="https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-xl.png"
              alt="US image"
            />
            <p>ENG</p>
            <IoMdArrowDropdown />
          </div>
          <Link to={"/auth"}>
            <div className={classes.auth}>
              <p>Hello, Sign in</p>
              <span>
                Accounts and Lists <IoMdArrowDropdown />{" "}
              </span>
            </div>
          </Link>
          <Link to={"/return"}>
            <div className={classes.return}>
              <p>Return &</p>
              <p>Orders</p>
            </div>
          </Link>
          <Link to={"/cart"}>
            <div className={classes.cart}>
              <IoMdCart />
              <p>{totalItems}</p>
            </div>
          </Link>
        </div>
      </header>
      <nav>
        <nav>
          <IoIosMenu />
          <ul>
            <li>All</li>
            <li>Today's Deals</li>
            <li>Registry</li>
            <li>Prime Video</li>
            <li>Gift Cards</li>
            <li>Customer Service</li>
            <li>Sell</li>
          </ul>
        </nav>
      </nav>
    </>
  );
}

export default Header;
