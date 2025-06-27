import React from "react";
import { BsVectorPen } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Testimonials = ({ database, setDatabase }) => {
  const navigate = useNavigate();

  // publish testimonial
  const publish = (e) => {
    e.preventDefault();

    const obj = {
      username: e.target.username.value,
      photo: e.target.photo.value,
      text: e.target.text.value,
    };

    setDatabase({
      ...database,
      testlist: [...database.testlist, obj],
    });
    navigate("/");
  };

  return (
    <article className="tests">
      <h3>Provide Testimonial</h3>

      <form onSubmit={publish}>
        <input type="text" name="username" placeholder="Username" required />
        <input type="text" name="photo" placeholder="Photo Link" />
        <textarea
          rows={5}
          required
          type="text"
          name="text"
          placeholder="Your thoughts"
        ></textarea>
        <button>
          Publish <BsVectorPen className="icon" />
        </button>
      </form>
    </article>
  );
};

export default Testimonials;
