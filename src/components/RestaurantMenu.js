import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../uttilites/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  //   const resId = params.resId;

  const restaurants = useRestaurantMenu(resId);
  return !restaurants ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        <h1>Restaurant resId: {resId}</h1>
        <h2>{restaurants.nickname}</h2>
        <img className="selfi-image" src={restaurants.image} />
        <h3>{restaurants.createdAt}</h3>
      </div>
      {/* <div>
        <h1>Menu</h1>
        <ul>
          {restaurants?.}
          {Object.values(restaurants?.menu?.items).map((item) => (
            <li key={item.resId}>{item.name}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};
export default RestaurantMenu;
