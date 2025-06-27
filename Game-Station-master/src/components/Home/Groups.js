import { GiGamepad } from "react-icons/gi";
import "../../styles/Groups.css";

const Groups = ({ grouplist, groupRef }) => {
  return (
    <section id="groups">
      <h2 ref={groupRef}>
        <GiGamepad className="icon" /> Explore Groups
      </h2>

      <div className="group-boxes">
        {grouplist.map((group) => (
          <article key={group.id}>
            <div>
              <img src={group.thumb} alt={group.title} />

              <h4>{group.title}</h4>

              <button>Join Group</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Groups;
