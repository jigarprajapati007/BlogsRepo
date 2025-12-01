import React from "react";

const AddComments = ({ rate, setRatingButtonFunc, size }) => {
  return (
    <div className="add-comment">
      <h1>
        {" "}
        <img src="/rectangle.svg" alt="rectangle" aria-hidden="true" /> Add A
        comment
      </h1>
      <div className="comment-in">
        <div className="first">
          <div className="sec">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" suppressHydrationWarning/>
            </div>
            <div>
              <label htmlFor="email" style={{marginTop:size.width > 345?3:0}}>Email</label>
              <input type="text" suppressHydrationWarning/>
            </div>
          </div>
          <div>
            <label htmlFor="comment">Comment</label>
            <textarea
              name="comment"
              placeholder="Search Anything..."
            suppressHydrationWarning></textarea>
          </div>
        </div>
        <div className="last">
          <div className="rating">
            <p className="rate-p">Rate the usefulness of the article</p>
            <div className="rate-btn">
              {rate === "bad" ? (
                <button style={{backgroundColor:'#ff0412'}} suppressHydrationWarning>
                  <img
                    src="/bad-w.svg"
                    alt=""
                    aria-hidden="true"
                    suppressHydrationWarning
                  />
                  {rate}
                </button>
              ) : (
                <img
                  className="rate-emoji"
                  src="/bad.svg"
                  alt="Bad rating"
                  role="button"
                  tabIndex="0"
                  onClick={() => setRatingButtonFunc("bad")}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") &&
                    setRatingButtonFunc("bad")
                  }
                />
              )}
              {rate === "average" ? (
                <button style={{backgroundColor:'#ff6700'}} suppressHydrationWarning>
                  <img
                    src="/normal-w.svg"
                    alt=""
                    aria-hidden="true"
                    suppressHydrationWarning
                  />
                  {rate}
                </button>
              ) : (
                <img
                  className="rate-emoji"
                  src="/normal.svg"
                  alt="AvrgF rating"
                  role="button"
                  tabIndex="0"
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") &&
                    setRatingButtonFunc("average")
                  }
                  onClick={() => setRatingButtonFunc("average")}
                />
              )}
              {rate === "normal" ? (
                <button style={{backgroundColor:'#ffb416'}} suppressHydrationWarning>
                  <img
                    src="/okay-w.svg"
                    alt=""
                    aria-hidden="true"
                    suppressHydrationWarning
                  />
                  {rate}
                </button>
              ) : (
                <img
                  className="rate-emoji"
                  src="/okay.svg"
                  alt="Okay rating"
                  role="button"
                  tabIndex="0"
                  onClick={() => setRatingButtonFunc("normal")}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") &&
                    setRatingButtonFunc("normal")
                  }
                />
              )}
              {rate === "nice" ? (
                <button style={{backgroundColor:'#1c9af4'}} suppressHydrationWarning>
                  <img
                    src="/more-okay-w.svg"
                    alt=""
                    aria-hidden="true"
                    suppressHydrationWarning
                  />
                  {rate}
                </button>
              ) : (
                <img
                  className="rate-emoji"
                  src="/more-okay.svg"
                  alt="nice rating"
                  role="button"
                  tabIndex="0"
                  onClick={() => setRatingButtonFunc("nice")}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") &&
                    setRatingButtonFunc("nice")
                  }
                />
              )}
              {rate === "good" ? (
                <button style={{backgroundColor:'#00BA5c'}} suppressHydrationWarning>
                  <img
                    src="/good-w.svg"
                    alt=""
                    aria-hidden="true"
                    suppressHydrationWarning
                  />
                  {rate}
                </button>
              ) : (
                <img
                  className="rate-emoji"
                  src="/good.svg"
                  alt="good rating"
                  role="button"
                  tabIndex="0"
                  onClick={() => setRatingButtonFunc("good")}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") &&
                    setRatingButtonFunc("bad")
                  }
                />
              )}
            </div>
          </div>
          <button suppressHydrationWarning>
            {" "}
            <img
              src="/send.svg"
              alt=""
              aria-hidden="true"
              suppressHydrationWarning
            />{" "}
            {size?.width < 345?'Send Comment':'Send'}
          </button>
        </div>
      </div>
    </div>
  );
};

export const AddCommentsMemoized = React.memo(AddComments);
