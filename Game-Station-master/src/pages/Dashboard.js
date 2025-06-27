import React, { useContext, useEffect } from "react";
import { dbContext } from "../App";
import Admin from "../components/Dashboard/Admin";
import Community from "../components/Dashboard/Community";
import DashNav from "../components/Dashboard/DashNav";
import Faqs from "../components/Dashboard/Faqs";
import Groups from "../components/Dashboard/Groups";
import Header from "../components/Dashboard/Header";
import Hero from "../components/Dashboard/Hero";
import Testimonials from "../components/Dashboard/Testimonials";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [database, setDatabase] = useContext(dbContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="dashboard">
      <DashNav />
      <Header database={database} setDatabase={setDatabase} />
      <Hero database={database} setDatabase={setDatabase} />
      <Community database={database} setDatabase={setDatabase} />
      <Groups database={database} setDatabase={setDatabase} />
      <Admin database={database} setDatabase={setDatabase} />
      <Testimonials database={database} setDatabase={setDatabase} />
      <Faqs database={database} setDatabase={setDatabase} />
    </section>
  );
};

export default Dashboard;
