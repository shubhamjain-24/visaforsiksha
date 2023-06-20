import React, { useState, useEffect } from "react";
import "./Section5.css";
import data from "../../../../config/sliderData";

const Section5 = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <>
      <div className="s5-mainContainer">
        <div className="s5-headingDiv">
          <div className="s5-headingDiv1">
            <div className="s5-headText1">TESTIMONIALS</div>
            <div className="s5-headText2">Our Students Reviews</div>
          </div>
          <div className="s5-headingDiv2">
            <div className="s5-headText3">
              We strive to provide unique, proper, and valuable drafts to each
              and every student which makes us different from our Competitors
            </div>
          </div>
        </div>
        <section className="s5-section">
          <div className="s5-title">
            {/* <h2 className='s5-leader'>top leader</h2> */}
          </div>
          <div className="s5-section-center">
            {people.map((item, indexPeople) => {
              const { id, image, name, title, review } = item;
              let position = "nextslide";
              if (indexPeople === index) {
                position = "activeSlide";
              }
              if (
                indexPeople === index - 1 ||
                (index === 0 && indexPeople === people.length - 1)
              ) {
                position = "lastSlide";
              }
              return (
                <article className={position} key={id}>
                  <img src={image} alt={name} className="s5-person-img" />
                  <h4 className="s5-name">{name}</h4>
                  <p className="s5-title">{title}</p>
                  <p className="s5-text">{review}</p>
                </article>
              );
            })}
            <button className="s5-prev" onClick={() => setIndex(index - 1)}>
              <i className="fas fa-arrow-right"></i>
            </button>
            <button className="s5-next" onClick={() => setIndex(index + 1)}>
              <i className="fas fa-arrow-left"></i>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Section5;
