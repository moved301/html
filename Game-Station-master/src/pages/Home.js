import { useContext, useEffect, useRef } from "react";
import { dbContext } from "../App";
import Admin from "../components/Home/Admin";
import Community from "../components/Home/Community";
import Container from "../components/Home/Container";
import Faqs from "../components/Home/Faqs";
import Footer from "../components/Home/Footer";
import Groups from "../components/Home/Groups";
import Header from "../components/Home/Header";
import Hero from "../components/Home/Hero";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
  const groupRef = useRef(null);
  const [database] = useContext(dbContext);
  const { admin, brand, hero, community, faqlist, grouplist, testlist } =
    database;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header brand={brand} />

      <Container groups={grouplist} groupRef={groupRef}>
        <Hero hero={hero} />
        <Community community={community} />
        <Groups grouplist={grouplist} groupRef={groupRef} />
        <Admin admin={admin} />
        <Testimonials testlist={testlist} />
        <Faqs faqlist={faqlist} />
      </Container>

      <Footer brand={brand} />
    </>
  );
};

export default Home;
