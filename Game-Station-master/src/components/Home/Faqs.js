import { FaQuestionCircle } from "react-icons/fa";
import "../../styles/Faqs.css";

const Faqs = ({ faqlist }) => {
  return (
    <section id="faqs">
      <h2>
        <FaQuestionCircle className="icon" /> Community FAQs
      </h2>

      {faqlist.map((faq) => (
        <details key={faq.id}>
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </section>
  );
};

export default Faqs;
