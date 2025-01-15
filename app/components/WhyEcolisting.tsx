/* eslint-disable @next/next/no-img-element */
export default function WhyEcolisting() {
  return (
    <section className="why-us">
        <div className="header">
          <h2>WHY CHOOSE ECOLISTING?</h2>
          <h6>Sell Smarter, Not Harder.</h6>
          <p>
            EcoListing combines cutting-edge technology with expert guidance to
            maximize your profit and minimize your hassle.
          </p>
        </div>
        <div className="whys-us-cards">
          <div className="cards">
            <div className="row">
              <div className="card col border-bottom_right">
                <img className="icon" src="whyusicon.png" alt="" />
                <h3>Only 1% commission</h3>
                <p>
                  This is a key selling point and should be prominently
                  displayed. It directly addresses cost-conscious users, which
                  is a critical factor for decision-making.
                </p>
              </div>
              <div className="card col">
                <img className="icon" src="Whyusicon2.png" alt="" />
                <h3>Best property Marketing</h3>
                <p>
                  Highlights the tools and strategies used, appealing to users
                  looking for professionalism and maximum visibility.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="card col">
                <img className="icon" src="Whyusicon3.png" alt="" />
                <h3>Data Backed Negotiations</h3>
                <p>
                  Builds trust by showing a systematic and professional approach
                  to securing the best price.
                </p>
              </div>
              <div className="card col border-left_top">
                <img className="icon" src="Whyusicon4.png" alt="" />
                <h3>24X7 VR View</h3>
                <p>
                  Provides a convenience-focused benefit that aligns with the
                  needs of tech-savvy or time-strapped users.
                </p>
              </div>
            </div>
          </div>
          <div className="BGblack-card">
            <h4>You could Save</h4>
            <div className="progressbar">
              <h4>$28000</h4>
              <progress
                value="20"
                max="100"
              ></progress>
              <div className="property-price">
                Property Selling price
                <span>$300,000</span>
              </div>
            </div>
            <div className="mt-5 text-center">
              <button className="w-80">Estimate Your Savings</button>
            </div>
          </div>
        </div>
      </section>
  );
}