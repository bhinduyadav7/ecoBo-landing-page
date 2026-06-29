export default function Footer() {
  return (
    <footer 
    id="contact" 
    className="footer">
      <div className="footer-top">
        <h1>EcoBo</h1>
        <p>Sustainable hydration for everyone.</p>
      </div>

      <div className="footer-links">
        <div>
          <h3>Products</h3>
          <p>Bottle</p>
          <p>Pricing</p>
          <p>Reviews</p>
        </div>

        <div>
          <h3>Company</h3>
          <p>About</p>
          <p>Story</p>
          <p>FAQ</p>
        </div>

        <div>
          <h3>Contact</h3>
          <p>hello@ecobo.com</p>
          <p>Bengaluru, India</p>
          <p>+91 98765 43210</p>
        </div>
      </div>

      <div className="footer-social">
        <span>🌿 Instagram</span>
        <span>🐦 Twitter</span>
        <span>💼 LinkedIn</span>
      </div>

      <div className="footer-bottom">
        © 2026 EcoBo. All rights reserved.
      </div>
    </footer>
  );
}