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
    </main>
  );
}

export default Home;
