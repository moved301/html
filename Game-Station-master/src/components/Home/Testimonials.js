import { FaQuoteLeft } from "react-icons/fa";
import { RiQuestionAnswerFill } from "react-icons/ri";
import "../../styles/Testimonials.css";

const Testimonials = ({ testlist }) => {
  return (
    <section id="testimonials">
      <h2>
        <RiQuestionAnswerFill className="icon" /> Testimonials
      </h2>

      <div className="test-boxes">
        {testlist.map((test) => (
          <article key={test.username}>
            <div className="test">
              <img src={test.photo} alt={test.username} />
              <div>
                <p>
                  <FaQuoteLeft className="quote" /> {test.text}
                </p>
                <small>@{test.username}</small>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
