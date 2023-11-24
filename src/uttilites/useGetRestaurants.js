import { useEffect, useState } from "react";
const useGetRestaurants = () => {
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [allRestaurants, setallRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(fetchRestDataUrl);
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
  return allRestaurants;
};
export default useGetRestaurants;
