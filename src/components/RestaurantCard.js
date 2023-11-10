import { imgCdnUrl } from "../config";

const RestaurantCard = (props) => {
  return (
    <div className="card">
      <img src={imgCdnUrl + props.cloudinaryImageId} alt="foodImage" />
      <h2>{props.name}</h2>
      <h3>{props.cuisines.join(", ")}</h3>
      <h4>{props.avgRating} stars</h4>
    </div>
  );
};
export default RestaurantCard;
