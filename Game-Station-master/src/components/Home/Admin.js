import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import "../../styles/Admin.css";

const Admin = ({ admin }) => {
  const { photo, username, bio, youtube, instagram } = admin;

  return (
    <section id="admin">
      <h2>
        <MdAdminPanelSettings className="target" /> Community Admin
      </h2>

      <article>
        <img src={photo} alt={username} />

        <div>
          <h4>@{username}</h4>
          <small>{bio}</small>
          <br />

          <div className="social">
            <a className="youtube" href={youtube}>
              <FaYoutube className="icon" /> Youtube
            </a>
            <a className="instagram" href={instagram}>
              <AiFillInstagram className="icon" /> Instagram
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Admin;
