import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/custom_hooks/useRestaurantMenu";
import RestaurantCategoryList from "./RestaurantCategoryList";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restaurantInfo, cetegoriesList } = useRestaurantMenu(resId);
  const [showThisIndex, setshowThisIndex] = useState(0);

  if (!restaurantInfo) {
    return <Shimmer />;
  }

  const { name, city, costForTwoMessage, cuisines, areaName } =
    restaurantInfo?.cards[2]?.card?.card?.info || {};

  return (
    <div className=" text-center p-4 m-4 space-y-20">
      <div className="m-4">
        <h1 className="font-bold text-2xl">{name}</h1>
        <p className="font-semibold">
          {city} : {areaName}{" "}
        </p>
        <p className=" text-slate-500">
          {cuisines && cuisines.length > 0
            ? `${cuisines.join(", ")} - ${costForTwoMessage}`
            : "No information available"}
        </p>
      </div>
      <div className=" bg-slate-50 w-7/12 m-auto ">
        {cetegoriesList.map((category, index) => (
          <RestaurantCategoryList
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showList={showThisIndex === index ? true : false}
            setshowThisIndex={() => setshowThisIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
