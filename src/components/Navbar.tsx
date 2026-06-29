export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">EcoBo</h1>

      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#story">About</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>

      <button
        className="nav-btn"
        onClick={() =>
          document
            .getElementById("pricing")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Shop Now
      </button>
    </nav>
  );
}