import Image from "next/image";
import React from "react";

export const RelatedBlogs = ({ size, item }) => {
  return (
    <div className="card">
      {size?.width <= 670 && (
        <Image
          src={item?.mobile}
          alt="related-blog"
          width={310}
          height={311.36}
        ></Image>
      )}
      {size?.width <= 800 && size?.width > 670 ? (
        <Image
          src={item?.tablet}
          alt="related-blog"
          width={336.5}
          height={337.98}
        ></Image>
      ) : (
        size?.width > 670 && (
          <Image
            src={item?.desk}
            alt="related-blog"
            width={228}
            height={229}
          ></Image>
        )
      )}
      <p className="p-1">{item?.title}</p>
      <p className="p-2">{item?.desc}</p>
      <span>{item?.author}</span>
    </div>
  );
};
