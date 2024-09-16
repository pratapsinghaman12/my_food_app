import { Link } from "react-router-dom";
import emptycart from "../utils/images/empty-cart.png";

const EmptyCart = () => {
  return (
    <div className="flex items-center justify-center text-center p-4 mt-20">
      <img src={emptycart} alt="Empty Cart" />
      <div className=" ">
        <h2 className=" font-bold text-xl">Your cart is empty</h2>
        <p className=" text-slate-500 mt-1">
          You can go to the home page to view more restaurants
        </p>
        <Link to={"/"}>
          <button className="p-2 m-8 bg-orange-400 text-white rounded-md">
            SEE RESTAURANTS NEAR YOU
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
