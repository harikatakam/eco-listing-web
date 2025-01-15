/* eslint-disable @next/next/no-img-element */
export default function Testimonals() {
  return (
    <>
      <section className="testimonals-wrapper">
        <div className="header">
          <h2>What our clients says</h2>
          <p>
            EcoListing has helped homeowners across the country save money, sell
            faster, and enjoy a stress-free selling experience. Here&apos;s why
            people trust us with their homes.
          </p>
        </div>
        <div className="testimonals">
          <img src="Leftquote.png" alt="" />
          <div className="testimonal">
            <div className="comment">
              I saved over $10,000 by using EcoListing&apos;s 1% commission
              model. The process was transparent and stress-free!
            </div>
            <div className="client">
              <h2>John Doe</h2>
              <div className="client_location">Austin,TX</div>
            </div>
          </div>
          <div className="testimonal">
            <div className="comment">
              I saved over $10,000 by using EcoListing&apos;s 1% commission
              model. The process was transparent and stress-free!
            </div>
            <div className="client">
              <h2>John Doe</h2>
              <div className="client_location">Austin,TX</div>
            </div>
          </div>
          <div className="testimonal">
            <div className="comment">
              I saved over $10,000 by using EcoListing&apos;s 1% commission
              model. The process was transparent and stress-free!
            </div>
            <div className="client">
              <h2>John Doe</h2>
              <div className="client_location">Austin,TX</div>
            </div>
          </div>
          <img src="Rightquote.png" alt="" />
        </div>
      </section>
    </>
  );
}
