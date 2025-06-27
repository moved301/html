import "../../styles/Container.css";
import Sidebar from "./Sidebar";

const Container = ({ groups, groupRef, children }) => {
  return (
    <div className="container">
      <Sidebar groups={groups} groupRef={groupRef} />
      <div>{children}</div>
    </div>
  );
};

export default Container;
