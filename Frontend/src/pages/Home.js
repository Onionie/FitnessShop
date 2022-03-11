import { Link } from 'react-router-dom';
import './Home.style.css';

function Home() {
  return (
    <main>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              Accessorize your workouts, train hard, and supply your fitness
              needs
            </h1>
            <p className="hero-description">
              We offer trusted brands that are very popular and will help you
              meet your fitness goals.
            </p>
            <Link to={`/shop`} className="btn btn-dark my-3 hero-btn-full">
              Shop Now
            </Link>
            <a
              href="#highlight"
              className="btn my-3 btn-outline-dark hero-btn-outline"
            >
              Learn More &darr;
            </a>
          </div>
          <div className="hero-image-div">
            <img
              src="./images/homePage/header-image.png"
              className="hero-image"
              alt="People working out"
            />
          </div>
        </div>
      </section>

      <section className="section-highlight" id="highlight">
        <div className="highlight">
          <div className="highlight-image">
            <img
              src="./images/homePage/feature-image.png"
              alt="supplements-all"
            ></img>
          </div>
          <div className="highlight-text-box">
            <ul>
              <li> Protein Shakes | 20+ grams of protein per serving</li>
              <li>
                Fat Burners | burns fat, while supporting your appetite and
                metabolism
              </li>
              <li> Pre-workouts | boosts your performance, power and focus.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
