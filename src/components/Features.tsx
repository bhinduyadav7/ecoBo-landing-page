export default function Features() {
  const features = [
    {
      icon: "🌿",
      title: "Eco Friendly",
      desc: "Made from sustainable materials.",
    },
    {
      icon: "❄️",
      title: "Keeps Cold 24 Hours",
      desc: "Double wall insulated technology.",
    },
    {
      icon: "💧",
      title: "Leak Proof",
      desc: "Designed for everyday adventures.",
    },
  ];

  return (
    <section 
    id="features"
    className="features-section">
      <h2>Why Choose EcoBottle?</h2>

      <div className="cards">
        {features.map((item) => (
          <div className="card" key={item.title}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}