import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Groups = ({ database, setDatabase }) => {
  const [add, setAdd] = useState(false);

  // add new group
  const addGroup = (e) => {
    e.preventDefault();

    const obj = {
      title: e.target.title.value,
      thumb: e.target.thumb.value,
      id: database.grouplist.length + 1,
    };

    setDatabase({
      ...database,
      grouplist: [...database.grouplist, obj],
    });
    setAdd(false);
  };

  // delete group
  const deltGroup = (id) => {
    const filtered = database.grouplist.filter((group) => group.id !== id);
    setDatabase({ ...database, grouplist: filtered });
  };

  return (
    <article className="groups">
      <h3>Add / Delete Groups</h3>

      {database.grouplist.map((group) => (
        <div key={group.id} className="group">
          <img src={group.thumb} alt={group.title} />

          <p>{group.title}</p>

          <button className="delt" onClick={() => deltGroup(group.id)}>
            <FaTrashAlt />
          </button>
        </div>
      ))}

      {add ? (
        <form onSubmit={addGroup}>
          <input required type="text" name="title" placeholder="Group Title" />
          <input
            required
            type="text"
            name="thumb"
            placeholder="Thumbnail Link"
          />
          <div className="btns">
            <button onClick={() => setAdd(false)}>Cancel</button>
            <button>Publish</button>
          </div>
        </form>
      ) : (
        <button onClick={() => setAdd(true)} className="add">
          Add new group
        </button>
      )}
    </article>
  );
};

export default Groups;
