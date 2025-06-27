import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PreCommunity from "../Home/Community";

const Community = ({ database, setDatabase }) => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(false);
  const [newData, setNewData] = useState(database.community);

  // open preview mode
  const showPreview = (e) => {
    e.preventDefault();
    setPreview(true);

    if (e.target.goal.value) {
      setNewData({ goal: e.target.goal.value });
    }
  };

  // close preview mode
  const cancelPreview = () => {
    setPreview(false);
    setNewData(database.community);
  };

  // publish changes
  const publish = () => {
    setDatabase({
      ...database,
      community: {
        ...newData,
      },
    });

    setPreview(false);
    navigate("/");
  };

  return (
    <article className="community">
      <h3>Edit Community Goal</h3>

      {preview === false ? (
        <form onSubmit={showPreview}>
          <textarea
            rows={5}
            name="goal"
            placeholder="Community Goals & Perks"
          ></textarea>
          <button type="submit">
            Preview <FaEye className="icon" />
          </button>
        </form>
      ) : (
        <div className="preview">
          <PreCommunity community={newData} />
          <div className="btns">
            <button onClick={cancelPreview}>Cancel</button>
            <button onClick={publish}>Publish</button>
          </div>
        </div>
      )}
    </article>
  );
};

export default Community;
