import React from "react";
import Caurosel from "../../Components/Caurosel/Caurosel";
import FindToys from "../../Components/FindToys/FindToys";
import HomeCard from "../../Components/HomeCard/HomeCard";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import Review from "../../Components/Review/Review";
import RecentPhoto from "../../Components/RecentPhoto/RecentPhoto";

const Home = () => {
  return (
    <div>
      <Caurosel></Caurosel>

      <div className="px-6">
        <FindToys></FindToys>
        <HomeCard></HomeCard>
        <HomeBanner></HomeBanner>
        <Review></Review>
        <RecentPhoto></RecentPhoto>
      </div>
    </div>
  );
};

export default Home;
