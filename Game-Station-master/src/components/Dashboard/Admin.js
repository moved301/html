import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PreAdmin from "../Home/Admin";

const Admin = ({ database, setDatabase }) => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(false);
  const [newData, setNewData] = useState(database.admin);

  // open preview mode
  const showPreview = (e) => {
    e.preventDefault();
    setPreview(true);

    const obj = { ...newData };
    e.target.childNodes.forEach((inp) => {
      if (inp.type !== "submit" && inp.value) {
        obj[inp.name] = inp.value;
      }
    });

    setNewData({ ...newData, ...obj });
  };

  // close preview mode
  const cancelPreview = () => {
    setPreview(false);
    setNewData(database.admin);
  };

  // publish changes
  const publish = () => {
    setDatabase({
      ...database,
      admin: {
        ...newData,
      },
    });

    setPreview(false);
    navigate("/");
  };

  return (
    <article className="admin">
      <h3>Update Admin Panel</h3>

      {preview === false ? (
        <form onSubmit={showPreview}>
          <input type="text" name="photo" placeholder="Photo Link" />
          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="bio" placeholder="About / Bio" />
          <input type="text" name="youtube" placeholder="Youtube Channel" />
          <input type="text" name="instagram" placeholder="Instagram Profile" />
          <button type="submit">
            Preview <FaEye className="icon" />
          </button>
        </form>
      ) : (
        <div className="preview">
          <PreAdmin admin={newData} />
          <div className="btns">
            <button onClick={cancelPreview}>Cancel</button>
            <button onClick={publish}>Publish</button>
          </div>
        </div>
      )}
    </article>
  );
};

export default Admin;
