import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../../styles/Footer.css";

const Footer = ({ brand }) => {
  const { logo, name } = brand;

  return (
    <footer>
      <div>
        <img src={logo} alt="Game Station" />

        <article>
          <Link to="dashboard">
            <button>
              Edit Page <FiEdit className="icon" />
            </button>
          </Link>
          <p>
            Powered by : <a href="https://pensil.in">Pensil</a>
          </p>
          <p>
            Developed by : <a href="https://masfikul-alam.web.app">Masfik</a>
          </p>
        </article>
      </div>

      <small>
        {name} &copy; {new Date().getFullYear()}
      </small>
    </footer>
  );
};

export default Footer;
