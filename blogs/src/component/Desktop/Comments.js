import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <div className="comment-div">
      <h1>
        {" "}
        <img src="/rectangle.svg" alt="rectangle" aria-hidden="true" /> Comments
      </h1>
      <div className="comment-list">
        {[1,2].map((item,index)=>{
            return(<div className="comment-card" key={item} style={{borderBottom:index!=1?"1px solid #dedede":""}}>
          <Image
            width={59.87}
            height={60}
            src={"/milindra.svg"}
            alt="human-logo"
            className="human-img"
          />
          <div className="comment">
            <div className="detail">
              <p>Kang Haerin</p>
              <div className="rate">
                <div className="star">
                  {[1, 2, 3, 4, 5].map((img) => (
                    <img src="/start-filled.svg" key={img}></img>
                  ))}
                </div>
                <p>{"(5.0)"}</p>
                
              </div>
              <time dateTime="2022-07-22">22 Jul 2022</time>
            </div>
            <span>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
            </span>
          </div>
        </div>)
        })}
      </div>
    </div>
  );
};
export const CommentsMemoized = React.memo(Comments);
