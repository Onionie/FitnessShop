import RestaurantComp from "../components/RestaurantComp";
import ScrollToTopOnMount from "../components/ScrollToTopMount";

function Restaurant() {
  return (
    <div>
      <ScrollToTopOnMount />
      <RestaurantComp />
    </div>
  );
}

export default Restaurant;
