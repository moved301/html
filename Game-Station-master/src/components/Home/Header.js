import { MdLogin } from "react-icons/md";
import "../../styles/Header.css";

const Header = ({ brand }) => {
  const { name, logo } = brand;

  return (
    <header>
      <nav>
        <div>
          <img src={logo} alt={name} />
          <h1>{name}</h1>
        </div>

        <button>
          Login <MdLogin className="icon" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
