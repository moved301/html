import { BsPersonPlusFill } from "react-icons/bs";
import "../../styles/Hero.css";

const Hero = ({ hero }) => {
  const { name, banner, heroText } = hero;

  return (
    <section id="hero">
      <img src={banner} alt={name} />

      <div>
        <button>
          <BsPersonPlusFill />
        </button>
        <p>{heroText}</p>
      </div>
    </section>
  );
};

export default Hero;
