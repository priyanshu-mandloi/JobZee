/* eslint-disable no-unused-vars */

import { Context } from "../../main";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import { Navigate } from "react-router-dom";
import PopularCategories from "./PopularCategories";
import PopularCompanies from "./PopularCompanies";
import React from "react";
import { useContext } from "react";

const Home = () => {
  const { isAuthorized } = useContext(Context);
  if (!isAuthorized) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <section className="homePage page">
        <HeroSection />
        <HowItWorks />
        <PopularCategories />
        <PopularCompanies />
      </section>
    </>
  );
};

export default Home;
