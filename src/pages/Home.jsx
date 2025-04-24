import React from "react";
import HeroCard from "../components/HeroCard";
import Marquee from "../components/common/marquee/Marquee";

const Home = () => {
  return (
    <section className="home">
      <HeroCard />
      <Marquee marqueestyle={"bg-[var(--main-color)] h-[10vh]"}>
        <p className="uppercase font-semibold text-[1.1rem] md:text-[1.6rem] text-white">
          Welcome to our online sanctuary! Step into a place of love, hope and
          faith. | We&apos;re delighted to have you here with us and we
          can&apos;t wait to meet you this sunday at 07:00 am.
        </p>
      </Marquee>
    </section>
  );
};

export default Home;
