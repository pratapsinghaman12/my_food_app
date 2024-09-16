import React from "react";
import ItemDisplay from "./ItemDisplay";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, addItem, deleteItem } from "../utils/redux/cartSlice";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items); // always subscribe to the small portion of the store otherwize it will lead to performance issue
  const uniqueItems = cartItem.filter(
    (item, index, arr) => arr.indexOf(item) === index
  );

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleAddingToCart = (item) => {
    dispatch(addItem(item));
  };

  const handleDeletingFromCart = (item) => {
    dispatch(deleteItem(item));
  };

  const getItemCount = (item) => {
    if (cartItem === undefined) {
      return 0;
    }
    return cartItem.reduce((accumulator, currentvalue) => {
      return item === currentvalue ? accumulator + 1 : accumulator;
    }, 0);
  };

  if (cartItem.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="p-4  text-center w-7/12 m-auto ">
      <div className="">
        <div className="font-bold text-2xl">SECURE CHECKOUT</div>
        <button
          className="p-2 m-2 text-white bg-orange-400 rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className="">
        {uniqueItems.map((item) => (
          <ItemDisplay
            key={item?.card?.info?.id}
            item={item}
            onAddingToCart={handleAddingToCart}
            onRemovingFromCart={handleDeletingFromCart}
            showButton={true}
            itemCount={getItemCount(item)}
          />
        ))}
      </div>
      <div className="flex justify-around my-10">
        <button className="px-4 py-2 m-2 text-white bg-green-500 rounded-lg">
          Continue Ordering
        </button>
      </div>
    </div>
  );
};

export default Cart;
