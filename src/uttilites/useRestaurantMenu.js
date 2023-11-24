import { useEffect, useState } from "react";
import { fetchResMenuUrl } from "../config";
const useRestaurantMenu = (resId) => {
  const [restaurants, setrestaurant] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(fetchResMenuUrl + resId + "&offset=0");
    const json = await data.json();
    setrestaurant(json?.selfieList[0]);
  }
  return restaurants;
};

export default useRestaurantMenu;
