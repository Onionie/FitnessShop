import CloseIcon from "@material-ui/icons/Close";
import HomeComp from "../components/HomeComp";

function Home() {
  return (
    <div>
      <HomeComp
        imageSrc="https://wallpaperaccess.com/full/568935.jpg"
        altName="palawan-island"
        heading1="Explore"
        heading2="Wonders"
      />
      <HomeComp
        imageSrc="http://img1.wsimg.com/isteam/ip/1428a966-28df-460c-b580-214ec1bb5bd8/632cf9d0-2830-4c3d-94b5-60846e028c1e.jpg"
        altName="hawaiian-food"
        heading1="Delight"
        heading2="In Every Bite"
      />
      <HomeComp
        imageSrc="https://cdn.suwalls.com/wallpapers/beaches/palawan-island-resort-philippines-28615-1920x1080.jpg"
        altName="hotel-beach"
        heading1="Enjoy"
        heading2="Your Stay"
      />
    </div>
  );
}

export default Home;
