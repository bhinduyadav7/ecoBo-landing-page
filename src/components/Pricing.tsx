export default function Pricing() {
  const plans = [
    {
      name: "Classic",
      price: "$29",
      features: [
        "750ml Capacity",
        "24 Hour Cooling",
        "Leak Proof",
        "BPA Free",
      ],
    },
    {
      name: "Premium",
      price: "$49",
      features: [
        "1L Capacity",
        "48 Hour Cooling",
        "Premium Finish",
        "Lifetime Warranty",
      ],
    },
    {
      name: "Pro",
      price: "$69",
      features: [
        "1.5L Capacity",
        "Custom Engraving",
        "48 Hour Cooling",
        "Free Shipping",
      ],
    },
  ];

  return (
    <section 
     id="pricing"
    className="pricing-section">
      <h1>Choose Your Bottle</h1>

      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h2>{plan.name}</h2>

            <h3>{plan.price}</h3>

            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>

            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}