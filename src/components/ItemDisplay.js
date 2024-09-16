import { CDN_URL } from "../utils/constants";

const ItemDisplay = ({
  item,
  showButton,
  onAddingToCart,
  onRemovingFromCart,
  itemCount,
}) => {
  const { name, price, isVeg, imageId, description } = item?.card?.info;

  return (
    <div className="flex justify-between border-b items-center relative p-4">
      <div className="flex flex-col">
        <div
          className={`mb-1 text-left ${
            isVeg ? "text-green-500" : "text-red-500"
          }`}
        >
          {isVeg ? "Veg" : "Non-Veg"}
        </div>
        <div className="mb-1 text-left font-semibold">{name}</div>
        <div className="mb-2 text-left text-lg">₹ {price / 100}</div>
        <p className="text-left text-xs text-gray-600 ">{description}</p>
      </div>
      <div className="w-32 h-32 p-4 m-4 flex-shrink-0 relative flex flex-col items-center">
        <img
          src={`${CDN_URL}${imageId}`}
          alt={name}
          className="w-full h-full object-cover rounded-md transition duration-300 transform hover:scale-105"
        />
        {showButton && (
          <div className="flex items-center mt-2">
            {itemCount > 0 ? (
              <>
                <button
                  className="bg-white text-red-500 rounded-md p-1 mr-2"
                  onClick={() => onRemovingFromCart(item)}
                >
                  -
                </button>
                <span className="font-semibold mr-2">{itemCount}</span>
                <button
                  className="bg-white text-black-500 rounded-md p-1"
                  onClick={() => onAddingToCart(item)}
                >
                  +
                </button>
              </>
            ) : (
              <button
                className="bg-white text-green-500 rounded-md p-1"
                onClick={() => onAddingToCart(item)}
              >
                ADD
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDisplay;
