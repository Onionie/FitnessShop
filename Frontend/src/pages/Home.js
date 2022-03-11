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

              <div class="type-content">
                <div class="type-tags">
                  <span class="tag tag--vegetarian">Accessories</span>
                </div>
                <ul class="type-attributes">
                  <li class="type-attribute">
                    <ion-icon class="type-icon" name="flame-outline"></ion-icon>
                  </li>
                  Wrist Sleeve
                  <li class="type-attribute">
                    <ion-icon
                      class="type-icon"
                      name="restaurant-outline"
                    ></ion-icon>
                    Wrist Wraps
                  </li>
                  <li class="type-attribute">
                    <ion-icon
                      class="type-icon"
                      name="restaurant-outline"
                    ></ion-icon>
                    Lifting Straps
                  </li>
                  <li class="type-attribute">
                    <ion-icon
                      class="type-icon"
                      name="restaurant-outline"
                    ></ion-icon>
                    Knee Sleevs
                  </li>
                  <li class="type-attribute">
                    <ion-icon
                      class="type-icon"
                      name="restaurant-outline"
                    ></ion-icon>
                    Elbow Sleeves
                  </li>
                  <li class="type-attribute">
                    <ion-icon
                      class="type-icon"
                      name="restaurant-outline"
                    ></ion-icon>
                    Face Mask
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
