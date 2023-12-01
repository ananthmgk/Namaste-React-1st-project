import { imgCdnUrl } from "../config";

const RestaurantCard = (props) => {
  return (
    <div className="w-[200px] p-2 m-2 shadow-lg bg-pink-100">
      <img src={imgCdnUrl + props.cloudinaryImageId} alt="foodImage" />
      <h2 className="font-bold text-xl">{props.name}</h2>
      <h3>{props.cuisines.join(", ")}</h3>
      <h4>{props.avgRating} stars</h4>
    </div>
  );
};
export default RestaurantCard;
