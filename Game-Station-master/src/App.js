import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as db from "./database";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
export const dbContext = createContext();

function App() {
  const [database, setDatabase] = useState(db);

  return (
    <dbContext.Provider value={[database, setDatabase]}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </dbContext.Provider>
  );
}

export default App;
