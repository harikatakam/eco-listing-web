export default function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="pt-5 pb-5">
            <div className="row">
              <div className="col-xl-9 col-md-9 mb-30">
                <div className="footer-header">
                  <h3>Newsletter</h3>
                  <div className="text">
                    <input type="text" placeholder="Enter Your Email Here" />
                    <button className="primary-button">Subscribe</button>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-3 mb-30">
                <div className="footer-header">
                  <h3>Follow Us</h3>
                  <div className="social-links">
                    <img src="logo--x.png" alt="" />
                    <img src="logo--instagram (3).png" alt="" />
                    <img src="logo--facebook (3).png" alt="" />
                    <img src="logo--youtube (2).png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="divider">
              {/* <!-- <div className="divider"></div> --> */}
              <img src="Line.png" alt="" />
            </div>
            <div className="row">
              <div className="col-xl-9 col-md-9 mb-30">
                <img src="Logo.svg" alt="" />
                <div>
                  EcoListing revolutionizes real estate by offering low
                  commission sales, advanced technology, and personalized
                  support for a seamless property-selling experience.
                </div>
              </div>
              <div className="col-xl-3 col-md-3 mb-30 quick-links">
                <h3>QuickLinks</h3>
                <ul>
                  <div>
                    <li>Home</li>
                    <li>Aboutus</li>
                    <li>SellersTool</li>
                  </div>
                  <div>
                    <li>Sold Properties</li>
                    <li>Enquiry</li>
                    <li>News & Articles</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
