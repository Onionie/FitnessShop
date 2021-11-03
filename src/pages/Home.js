import CloseIcon from "@material-ui/icons/Close";
import HomeComp from "../components/HomeComp";
import "./Home.css";

function Home() {
  return (
    <div>
      <HomeComp
        imageSrc="https://cdn.suwalls.com/wallpapers/beaches/palawan-island-resort-philippines-28615-1920x1080.jpg"
        altName="hotel-beach"
        heading1="Enjoy"
        heading2="Your Stay"
      />
      <h1>
        Home <CloseIcon />
      </h1>
    </div>
  );
}

export default Home;
