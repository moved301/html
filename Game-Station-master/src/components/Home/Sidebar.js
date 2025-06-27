import { BiGroup } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { GiGamepad } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import "../../styles/Sidebar.css";

const Sidebar = ({ groups, groupRef }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollGroup = () => {
    window.scrollTo({
      top: groupRef.current.offsetTop - 80,
      behavior: "smooth",
    });
  };

  return (
    <aside>
      <ul>
        <li onClick={scrollTop}>
          <HiHome className="icon" /> Home
        </li>
        <li onClick={scrollGroup}>
          <BiGroup className="icon" /> Explore
        </li>
        <Link to="dashboard">
          <li onClick={scrollGroup}>
            <FiEdit className="icon" /> Edit Page
          </li>
        </Link>
      </ul>

      <hr />

      <ul>
        {groups.map((group) => (
          <li key={group.id}>
            <GiGamepad className="icon" /> {group.title}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
