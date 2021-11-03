import CloseIcon from "@material-ui/icons/Close";
import HomeComp from "../components/HomeComp";
import "./Home.css";

function Home() {
  return (
    <div>
      <HomeComp />
      <h1>
        Home <CloseIcon />
      </h1>
    </div>
  );
}

export default Home;
