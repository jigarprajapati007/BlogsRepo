import React from "react";
import { RelatedBlogs } from "./RelatedBlogs";
import {relatedpost} from "../../app/data/posts.js"
const Releted = ({size}) => {
  return (
    <div className="container-relate">
      <div className="related">
        <h1>Related articles</h1>
      </div>
      <div className="relate-blog-card">{relatedpost.map((item,index)=><RelatedBlogs key={index} item={item} size={size}/>)}</div>
    </div>
  );
};

export const ReletedMemoized = React.memo(Releted);
