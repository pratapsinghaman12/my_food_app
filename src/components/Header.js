import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/custom_hooks/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const cartItem = useSelector((store) => store.cart.items);
  return (
    <div className="flex  shadow-lg justify-between fixed top-0 left-0 right-0  z-20 bg-white">
      <div>
        <img className=" w-28" src={LOGO_URL} alt=""></img>
      </div>
      <div className="flex items-center m-6">
        <ul className="flex space-x-4">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/grocery">GroceryStore</Link>
          </li>
          <li className="relative">
            <Link to="/cart" className="flex items-center group">
              Cart
              {cartItem.length > 0 && (
                <span className="bg-orange-500 text-white rounded-full text-xs px-2 py-1  absolute -top-2 -right-4 ">
                  {cartItem.length}
                </span>
              )}
            </Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
