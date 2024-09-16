import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../utils/redux/cartSlice";
import ItemDisplay from "./ItemDisplay";

const ItemList = ({ item }) => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const getItemCount = (item) => {
    if (cartItem === undefined) {
      return 0;
    }
    console.log("getitem called insideitemlist");
    return cartItem.reduce((accumulator, currentvalue) => {
      return item === currentvalue ? accumulator + 1 : accumulator;
    }, 0);
  };

  const handleAddingToCart = (item) => {
    dispatch(addItem(item));
  };

  const handleDeletingFromCart = (item) => {
    dispatch(deleteItem(item));
  };

  return (
    <ItemDisplay
      item={item}
      showButton={true}
      onAddingToCart={handleAddingToCart}
      onRemovingFromCart={handleDeletingFromCart}
      itemCount={getItemCount(item)}
    />
  );
};

export default ItemList;
