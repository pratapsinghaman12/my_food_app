import { Link } from "react-router-dom";
import RestaurantCard, { RestaurantCardWithPramotion } from "./Restaurantcard";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST_API } from "../utils/constants";
import { useState, useEffect } from "react";
import axios from "axios";
import useOnlineStatus from "../utils/custom_hooks/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const CardWithPramotion = RestaurantCardWithPramotion(RestaurantCard);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(RESTAURANT_LIST_API);
        // const json = await response.json();
        console.log(response);

        const restaurantList =
          response?.data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];
        setListOfRestaurant(restaurantList);
        setFilteredRestaurantList(restaurantList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call fetchData directly inside useEffect
  }, []); // Empty dependency array to ensure useEffect runs only once

  const handleSearch = () => {
    const filteredList = listOfRestaurant.filter((resData) =>
      resData.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredRestaurantList(filteredList);
  };

  const handleFilterTopRestaurants = () => {
    const filteredList = listOfRestaurant.filter(
      (res) => res.info.avgRating > 4.1
    );
    setFilteredRestaurantList(filteredList);
  };

  if (onlineStatus === false) {
    return (
      <h2>OOOps!!! Looks like you are not connected to internet 😂😂😂😂</h2>
    );
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4 m-4">
      <div className="flex p-4 m-4 space-x-12">
        <div className="flex space-x-2">
          <input
            className="bg-gray-100 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-400 transition duration-300"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <button
          className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md"
          onClick={handleFilterTopRestaurants}
        >
          Filter Top Restaurants
        </button>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-8 ml-4">Restaurants Near You</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredRestaurantList.map((restaurant) => (
            <Link
              to={`/restaurants/${restaurant.info.id}`}
              key={restaurant.info.id}
              className="text-black no-underline"
            >
              {restaurant?.info?.avgRating >= 4.4 ? (
                <CardWithPramotion resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
