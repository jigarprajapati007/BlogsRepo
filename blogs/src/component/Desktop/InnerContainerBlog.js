import Image from "next/image";
import React, { Fragment } from "react";
import { Blogs } from "./Blogs";
import { TourGides } from "./TourGides";

const InnerContainerBlog = ({
  size,
  slides,
  indexAbout,
  goNextAbout,
  goPrevAbout,
  goNext,
  goPrev,
  blogList,
  index,
}) => {

  return (
    <Fragment>
      {" "}
      <div className="inner-container">
        <div className="main">
          <div className="header">
            <Image
              width={32}
              height={32}
              src={"/alex.svg"}
              alt="human-logo"
              className="human-img"
            />
            <p className="name-p">ALEX CARTER</p>
            <time dateTime="2025-01-23" className="time-header">
              23 January 2025
            </time>
          </div>
          <div className="detail">
            <p>
              Discover exercises that target every muscle group, helping you
              build strength and endurance. Perfect for beginners and seasoned
              gym-goers alike.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
            </p>
            <p>
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
            </p>
            <div className="p-i-tag">
              <p>
                With over a decade of experience in the fitness industry, Alex
                specializes in strength training and functional fitness.
                Certified by NASM and known for his motivational style, Alex
                designs workout programs that are both challenging and
                achievable. His passion lies in helping clients build strength
                and confidence through personalized training routines. Outside
                the gym, Alex is an avid runner and enjoys outdoor adventures.
              </p>
            </div>
            <p>
              With over a decade of experience in the fitness industry, Alex
              specializes in strength training and functional fitness. Certified
              by NASM and known for his motivational style, Alex designs workout
              programs that are both challenging and achievable. His passion
              lies in helping clients build strength and confidence through
              personalized training routines. Outside the gym, Alex is an avid
              runner and enjoys outdoor adventures.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
            </p>
            <p>
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
            </p>
            {/*This is just to match pixel perfect tool in chrome extension as screen more than 345 are having this paragrapgh, so this is for practical test only*/}
            {size?.width > 345 && (
              <p>
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean
              </p>
            )}
            {/*This is just to match pixel perfect tool in chrome extension as in less than 345 screen this below paragraph is there, so this is for practical test only*/}
            {size?.width <= 345 && (
              <>
                <p>
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim.
                </p>
                <p style={{ marginTop: -9 }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus
                </p>
              </>
            )}
          </div>

          {size?.width > 800 && (
            <AboutSliderComp
              slides={slides}
              indexAbout={indexAbout}
              goNextAbout={goNextAbout}
              goPrevAbout={goPrevAbout}
              showBtntxt={true}
            />
          )}
        </div>
        <div className="explore">
          <h1>Explore more</h1>
          {size?.width > 670 && (
            <div className="explore-div">
              {blogList.map((item,indexbg) => {
                return <Blogs  size={size}  key={indexbg} item={item}/>;
              })}
            </div>
          )}
          {size?.width <= 670 && (
            <div className="explore-slider">
              <div
                className="slider-container"
                style={{
                  transform: `translateX(-${index * 100}%)`,
                }}
              >
                {blogList.map((item,indexbg) => (
                  <div className="slide" key={indexbg} >
                    <Blogs size={size} item={item}/>
                  </div>
                ))}
              </div>

              <AboutFooter showBtntxt={false} goNext={goNext} goPrev={goPrev} />
            </div>
          )}
          <TourGides />
        </div>
      </div>
      {size?.width <= 800 && size?.width > 345 && (
        <AboutSliderComp
          slides={slides}
          indexAbout={indexAbout}
          goNextAbout={goNextAbout}
          goPrevAbout={goPrevAbout}
          showBtntxt={true}
        />
      )}
    </Fragment>
  );
};

export const InnerContainerBlogMemoized = React.memo(InnerContainerBlog);

export const AboutSliderComp = ({
  slides,
  indexAbout,
  goNextAbout,
  goPrevAbout,
  showBtntxt,
}) => {
  return (
    <div className="about-slider-wrapper">
      <div
        className="about-slider-container"
        style={{ transform: `translateX(-${indexAbout * 100}%)` }}
      >
        {slides.map((item) => (
          <div className="about-slide" key={item}>
            <AboutComp showBtntxt={true} />
          </div>
        ))}
      </div>

      <AboutFooter
        showBtntxt={showBtntxt}
        goNext={goNextAbout}
        goPrev={goPrevAbout}
      />
    </div>
  );
};

export const AboutComp = () => {
  return (
    <div className="about">
      <h3>About Alex Carter</h3>
      <div className="div-img">
        <Image
          width={100}
          height={100}
          src={"/alex.svg"}
          alt="human-logo"
          className="human-img"
        />
      </div>
      <p>
        {/*With over a decade in fitness, Alex specializes in strength training.
          Certified by NASM, he designs challenging yet achievable workout
          programs. His passion is helping clients build strength and confidence
          through personalized routines. Outside the gym, Alex enjoys running
          and outdoor adventures.*/}
        With over a decade of experience in the fitness industry, Alex
        specializes in strength training and functional fitness. Certified by
        NASM and known for his motivational style, Alex designs workout programs
        that are both challenging and achievable. His passion lies in helping
        clients build strength and confidence through personalized training
        routines. Outside the gym, Alex is an avid runner and enjoys outdoor
        adventures.
      </p>
    </div>
  );
};

const AboutFooter = ({ showBtntxt, goNext, goPrev }) => {
  return (
    <div
      className="about-footer"
      style={{ borderTop: !showBtntxt ? "none" : "inherite" }}
    >
      <div className="prev">
        <button suppressHydrationWarning onClick={goPrev}>
          {" "}
          <img src="/prev-arrow.svg" alt="arrow" /> <span> Previous</span>
        </button>
        {showBtntxt && <p>5 Tips for Better Cardio Sessions</p>}
      </div>
      <div className="next">
        <button
          style={{ marginLeft: "auto" }}
          suppressHydrationWarning
          onClick={goNext}
        >
          <span>Next</span> <img src="/next-arrow.svg" alt="" />
        </button>
        {showBtntxt && (
          <p style={{ textAlign: "end" }}>
            Meal Prep Basics for Gym Enthusiasts
          </p>
        )}
      </div>
    </div>
  );
};
