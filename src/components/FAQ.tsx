export default function FAQ() {
  const faqs = [
    {
      question: "How long does the bottle keep water cold?",
      answer: "Up to 48 hours with double-wall insulation.",
    },
    {
      question: "Is the bottle leak proof?",
      answer: "Yes, the bottle is completely leak proof.",
    },
    {
      question: "Is it BPA free?",
      answer: "Absolutely! We use food-grade safe materials.",
    },
    {
      question: "Do you offer free shipping?",
      answer: "Yes, free shipping on orders above $50.",
    },
  ];

  return (
    <section 
    id="faq"
    className="faq-section">
      <h1>Frequently Asked Questions</h1>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div className="faq-card" key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}