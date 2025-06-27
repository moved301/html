import { BiTargetLock } from "react-icons/bi";
import "../../styles/Community.css";

const Community = ({ community }) => {
  const { goal, perks } = community;

  return (
    <section id="community">
      <h2>
        <BiTargetLock className="target" /> Community Goals
      </h2>

      <article>
        <p>{goal}</p>

        {perks && (
          <div className="perks">
            <b>Perks -</b>
            <ul>
              {perks.map((perk, id) => (
                <li key={id}>{perk}</li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </section>
  );
};

export default Community;
