import React from "react";
import { FiEdit } from "react-icons/fi";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";

const DashNav = () => {
  return (
    <nav id="nav">
      <div>
        <h2>
          <FiEdit className="down" /> Template Dashboard
        </h2>
        <Link to="/">
          <button>
            <TiArrowBack className="icon" /> Back
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default DashNav;
