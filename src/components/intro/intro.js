import React from "react";
import "./intro.css";
// import bg from '../../assets/image.png';
import Milton from "../../assets/Milton.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello"> Hello, </span>
        <span className="introText">
          {" "}
          I'm <span className="introName">Milton</span> <br />
          Fullstack Developer{" "}
        </span>
        <p className="introPara">
          I am a fullstack developer student with a passion for creating
          visually appealing <br /> and user-friendly websites. From crafting
          elegant user interfaces to building <br /> robust backend systems, I
          enjoy working across the full spectrum of web development.
          {/* <br /> Whether it's designing intuitive frontend experiences or
          architecting efficient <br /> server-side solutions, I strive to
          create seamless digital experiences that delight users. */}
        </p>
        {/* <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire" className="btnImg" />
            Hire Me
          </button>
        </Link> */}
      </div>
      <img src={Milton} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
