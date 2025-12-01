"use client";
import Image from "next/image";
import React from "react";

export const Blogs = ({ size,item }) => {
  return (
    <div className="blog-card">
      {size?.width > 800 && (
        <Image
          width={301}
          height={165}
          className="blog-img"
          src={item?.desk||"blog-2653.svg"}
          alt="blog-img"
        ></Image>
      )}
      {size?.width <= 800 && size?.width > 670 && (
        <Image
          width={233}
          height={165}
          className="blog-img"
          src={item?.tablet||"blog-tablet.svg"}
          alt="blog-img"
        ></Image>
      )}
      {size?.width <= 670 && (
        <Image
          width={310}
          height={165}
          className="blog-img"
          src={item?.mobile||"blog-mobile.svg"}
          alt="blog-img"
        ></Image>
      )}
      <div className="title-div">
        <h1>{item?.title}</h1>
        <hr />
        <time>{item?.time}</time>
      </div>
      <p>{item?.desc}</p>
    </div>
  );
};
