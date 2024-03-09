import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Ecom4 from '../../assets/Ecom4.png';
import Mesh4 from '../../assets/Mesh4.png';
import Rick4 from '../../assets/Rick4.png';

const Works = () => {
    return (
        <section id="works">

            <h2 className="worksTitle">
                My Portfolio
            </h2>
            <span className="worksDesc">
                I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence. </span>
            <div className="worksImgs">
                <a href="https://github.com/Milton3000/Rick-Morty-API" target="_blank" rel="noopener noreferrer">
                    <img src={Rick4} alt="" className="worksImg" />
                </a>
                <a href="https://github.com/Milton3000/API-UPG.-MILTON-FINISHED" target="_blank" rel="noopener noreferrer">
                    <img src={Ecom4} alt="" className="worksImg" />
                </a>
                <a href="https://milton3000.github.io/" ta rget="_blank" rel="noopener noreferrer">
                    <img src={Mesh4} alt="" className="worksImg" />
                </a>
                <img src={Portfolio1} alt="" className="worksImg" />
                <img src={Portfolio1} alt="" className="worksImg" />

                <img src={Portfolio1} alt="" className="worksImg" />

            </div>
            {/* <button className="worksBtn"> Add back later perhaps
                See More
            </button> */}
        </section>
    );
}

export default Works;