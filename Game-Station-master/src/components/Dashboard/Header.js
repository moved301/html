import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PreHeader from "../Home/Header";

const Header = ({ database, setDatabase }) => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(false);
  const [newData, setNewData] = useState(database.brand);

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
    setNewData(database.brand);
  };

  // publish changes
  const publish = () => {
    setDatabase({
      ...database,
      brand: {
        ...newData,
      },
    });

    document.title = newData.name;
    setPreview(false);
    navigate("/");
  };

  return (
    <article className="header">
      <h3>Edit Page Header</h3>

      {preview === false ? (
        <form onSubmit={showPreview}>
          <input type="text" name="logo" placeholder="Logo Link" />
          <input type="text" name="name" placeholder="Community Title" />
          <button type="submit">
            Preview <FaEye className="icon" />
          </button>
        </form>
      ) : (
        <div className="preview">
          <PreHeader brand={newData} />
          <div className="btns">
            <button onClick={cancelPreview}>Cancel</button>
            <button onClick={publish}>Publish</button>
          </div>
        </div>
      )}
    </article>
  );
};

export default Header;
