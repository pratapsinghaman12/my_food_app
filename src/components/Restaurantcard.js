import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, costForTwo, avgRating, cuisines } =
    resData?.info;

  return (
    <div className="p-4 m-4 w-60  rounded-lg shadow-lg bg-white hover:shadow-2xl transition duration-300">
      <div className="overflow-hidden rounded-md h-32 mb-4">
        <img
          className="w-full h-full object-cover rounded-md transition duration-300 transform hover:scale-105"
          alt={name}
          src={`${CDN_URL}${cloudinaryImageId}`}
        />
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">{name}</h3>
        <h4 className="text-sm text-gray-600 mb-2 overflow-hidden">
          {cuisines.length <= 4
            ? cuisines.join(", ")
            : cuisines.slice(0, 3).join(", ")}
        </h4>

        <div className="flex  mb-1 space-x-12">
          <span className="ml-1">{avgRating} ⭐️</span>
          <h4 className="text-gray-700">{costForTwo}</h4>
        </div>
      </div>
    </div>
  );
};

export const RestaurantCardWithPramotion = (RestaurantCard) => {
  return (params) => {
    return (
      <div>
        <label className="absolute p-1 bg-black text-white z-10 rounded-md">
          Best In Category
        </label>
        <RestaurantCard {...params} />
      </div>
    );
  };
};

export default RestaurantCard;
