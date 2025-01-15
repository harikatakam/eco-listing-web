/* eslint-disable @next/next/no-img-element */
export default function Banner() {
  return (
    <div className="hero_section container-fluid">
    <div className="hero_image">
      <img src="811a8446399692fffed1cae2a06e442b.jpeg" alt="" />
      <div className="overlay"></div>
    </div>
    <div className="content">
      <div className="heading">
        <h2>Easy Virtual Home Showings</h2>
        <p>Your Property, Anywhere, Anytime</p>
      </div>
      <div className="btn_group">
        <button className="secondary-button">How We Sell</button>
        <button className="primary-button">Talk to a Our Expert</button>
      </div>
    </div>
  </div>
  );
}