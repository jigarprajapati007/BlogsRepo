import Image from "next/image";
import React, { useId } from "react";

export const TourGides = () => {
  const id = useId();
  const addScroll = (type) => {
    const el = document.getElementById(id);
    if (el) {
      el.style.overflow = type;
    }
  };
  return (
    <div className="tour-container">
      <h1>Tour Guides</h1>
      <div
        className="list-div"
        id={id}
        onMouseEnter={() => addScroll('auto')}
        onMouseLeave={() => addScroll('hidden')}
      >
        {[1, 2, 3].map((item) => (
          <div className="tour-card" key={item}>
            <div className="detail">
              {" "}
              <Image
                width={60}
                height={60}
                src={"/milindra.svg"}
                alt="human-logo"
                className="human-img"
              />
              <div>
                <p>Miranda Rachel</p>
                <address>
                  {" "}
                  <img src="/location.svg" alt="" />
                  Jombang, Jawa timur
                </address>
              </div>
            </div>
            <div className="rate">
              <div className="star">
                {[1, 2, 3, 4, 5].map((img) => (
                  <img src="/start-filled.svg" key={img}></img>
                ))}
              </div>
              <p>{"(4.0)"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
