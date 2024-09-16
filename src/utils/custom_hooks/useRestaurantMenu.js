import { useEffect, useState } from "react";
import axios from "axios";
import { RESTAURANT_ITEM_LIST_API } from "../constants";

const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [cetegoriesList, SetCetegoriesList] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const menuData = await axios.get(RESTAURANT_ITEM_LIST_API + resId);
        const itemList = findCategories(menuData?.data);
        setRestaurantInfo(menuData.data.data);
        SetCetegoriesList(itemList || []); // Ensure itemList is an array
      } catch (error) {
        console.error("Error fetching menu:", error);
        // Handle the error (e.g., set an error state or display an error message)
      }
    };

    fetchMenu();
  }, [resId]);

  const findCategories = (json) => {
    const groupedCard = (json?.data?.cards || []).find(
      (card) => card?.groupedCard
    );

    if (!groupedCard) {
      return null;
    }

    const regularCards =
      groupedCard.groupedCard.cardGroupMap?.REGULAR?.cards || [];

    const categoryList = regularCards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return categoryList.length > 0 ? categoryList : null;
  };

  return { restaurantInfo, cetegoriesList };
};

export default useRestaurantMenu;
