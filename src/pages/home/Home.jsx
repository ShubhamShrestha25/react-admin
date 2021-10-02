import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";
import "./home.css";
import { userdata } from "../../DummyData";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userdata}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
    </div>
  );
};

export default Home;
