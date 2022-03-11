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
              href="#featured"
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

      <section className="section-featured-brands" id="featured">
        <div className="container">
          <h2 className="heading-featured-in">FEATURED BRANDS</h2>
          <div className="logos">
            <img
              src="https://www.bodybuilding.com/images/2021/november/Signature.jpg"
              alt="Bodybuilding-logo"
            />
            <img
              src="https://www.bodybuilding.com/images/2021/november/EVL.jpg"
              alt="EVL-logo"
            />
            <img
              src="https://www.bodybuilding.com/images/2021/november/Optimum-Nutrition.jpg"
              alt="Optimum Nutrition-logo"
            />
          </div>
        </div>
      </section>

      <section className="section-highlight">
        <div className="highlight">
          <div className="highlight-image">
            <img
              src="./images/homePage/feature-image.png"
              alt="supplements-all"
            ></img>
          </div>
          <div className="highlight-text-box">
            <ul>
              <li>
                <i className="fa-solid fa-check"></i>
                Protein Shakes | 20+ grams of protein per serving
              </li>
              <li>
                <i className="fa-solid fa-fire"></i>
                Fat Burners | burns fat, while supporting your appetite and
                metabolism
              </li>
              <li>
                <i className="fa-solid fa-bolt"></i>Pre-workouts | boosts your
                performance, power and focus.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-products">
        <div className="products hcontainer">
          <div className="products-text-box">
            <h2>PRODUCTS WE CARRY</h2>
          </div>

          <div className="products-container hcontainer grid">
            <div className="type">
              <img src="./images/accPage/acc3.jpg" alt="Wrist-wraps"></img>

              <div class="meal-content">
                <div class="meal-tags">
                  <span class="tag tag--vegetarian">Vegetarian</span>
                </div>
                <p class="meal-title">Japanese Gyozas</p>
                <ul class="meal-attributes">
                  <li class="meal-attribute">
                    <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
                    <span>
                      <strong>650</strong> calories
                    </span>
                  </li>
                  <li class="meal-attribute">
                    <ion-icon
                      class="meal-icon"
                      name="restaurant-outline"
                    ></ion-icon>
                    <span>
                      NutriScore &reg; <strong>74</strong>
                    </span>
                  </li>
                  <li class="meal-attribute">
                    <ion-icon class="meal-icon" name="star-outline"></ion-icon>
                    <span>
                      <strong>4.9</strong> rating (537)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="type">
              <img
                src="./images/equipmentPage/equipment4.jpg"
                alt="indoor-bicycle"
              ></img>
            </div>
            <div className="type">
              <img src="./images/suppPage/supp1.jpg" alt="Whey-protein"></img>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
