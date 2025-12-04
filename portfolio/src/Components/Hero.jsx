import "../Styles/Hero.css";

export default function Hero() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="intro">
            Hello i am Aman Shakya,
            <span className="colored-text"> web designer </span> and
            <span className="colored-text"> front-end developer </span>
          </p>
          <p className="intro-2">
            I craft responsive websites where technologies meet creativity
          </p>
          <button className="contact-btn">Contact me</button>
        </div>

        {/* NEW WRAPPER */}
        <div className="hero-right">
          <div className="hero-image">
            <img src="Images/1.png" className="hero-img" alt="Hero Image" />
          </div>
          <div className="work-status">
            Currently Working as Graphics Designer
          </div>
        </div>
      </section>
    </>
  );
}
