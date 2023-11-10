import { useEffect, useState } from "react";
// import { restaurantsList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(searchInput, allRestaurants) {
  return allRestaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchInput)
  );
}

const Body = () => {
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  console.log(filteredRestaurants);
  const [allRestaurants, setallRestaurants] = useState([]);
  console.log(allRestaurants);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.192651399999999&lng=77.43003569999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants[1].info
    // );
    setallRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (!allRestaurants) return null;

  return allRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setfilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
