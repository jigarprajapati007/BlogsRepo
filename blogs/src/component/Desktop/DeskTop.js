"use client";
import Image from "next/image";
import React, { useLayoutEffect, useState } from "react";
import {
  AboutSliderComp,
  InnerContainerBlogMemoized,
} from "./InnerContainerBlog";
import { CommentsMemoized } from "./Comments";
import { AddCommentsMemoized } from "./AddComments";
import { ReletedMemoized } from "./Releted";
import { blogpost } from "../../app/data/posts.js";
export const DeskTop = () => {
  const [rate, setRate] = useState("good");
  const [size, setSize] = useState({
    width: 0,
  });

  const [index, setIndex] = useState(0);
  const [indexAbout, setAboutIndex] = useState(0);
  const blogList = blogpost;
  const slides = [11, 21, 31]; // Three slides
  
  const goNext = () => {
    setIndex((prev) => (prev + 1) % blogList.length);
  };

  const goPrev = () => {
    setIndex((prev) => (prev === 0 ? blogList.length - 1 : prev - 1));
  };

  const goNextAbout = () => setAboutIndex((prev) => (prev + 1) % slides.length);

  const goPrevAbout = () =>
    setAboutIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const setRatingButtonFunc = (content) => {
    setRate(content);
  };

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    function handleResize() {
      setSize({
        width: window.innerWidth,
      });
    }

    // Run once on mount
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="desktop-container">
      {size?.width > 1800 && (
        <Image
          width={2653}
          height={560}
          src={"/common-bog.svg"}
          alt="Blog graphic"
          className="desktop-main-img"
        />
      )}
      {size?.width <= 1800 && size?.width > 800 && (
        <Image
          width={1440}
          height={480}
          src={"/main-1440.svg"}
          alt="Blog graphic"
          className="desktop-main-img"
        />
      )}
      {size?.width <= 800 && size?.width > 500 && (
        <Image
          width={697}
          height={232.33}
          src={"/main-tablet.svg"}
          style={{ marginTop: -26 }}
          alt="Blog graphic"
          className="desktop-main-img"
        />
      )}
      {size?.width <= 500 && (
        <Image
          width={310}
          height={179}
          src={"/main-mobile.svg"}
          style={{ marginTop: 14 }}
          alt="Blog graphic"
          className="desktop-main-img"
        />
      )}
      <InnerContainerBlogMemoized
        size={size}
        slides={slides}
        indexAbout={indexAbout}
        goNextAbout={goNextAbout}
        goPrevAbout={goPrevAbout}
        goNext={goNext}
        goPrev={goPrev}
        blogList={blogList}
        index={index}
      />
      <CommentsMemoized />
      {/*This below component is just to match figma design, nothing else, code wise it's not should be there.*/}
      {size?.width < 670 && (
        <AboutSliderComp
          slides={slides}
          indexAbout={indexAbout}
          goNextAbout={goNextAbout}
          goPrevAbout={goPrevAbout}
          showBtntxt={false}
        />
      )}
      <AddCommentsMemoized
        rate={rate}
        setRatingButtonFunc={setRatingButtonFunc}
        size={size}
      />
      <ReletedMemoized size={size} />
    </div>
  );
};
