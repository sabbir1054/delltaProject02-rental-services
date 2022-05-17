import React from "react";
import HomeNav from "../../Components/NavBars/HomeNav/HomeNav";
import LoginPage from "../LoginPage/LoginPage";
import styles from "./HomePage.module.css";
const Home = () => {
  return (
    <div className={styles.home_wrapper}>
      <HomeNav />

      <LoginPage></LoginPage>
    </div>
  );
};

export default Home;
