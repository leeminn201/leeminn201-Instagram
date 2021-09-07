import React from "react";

import "./PostInfo.scss";
import heart from "../../Media/heart2.png";
import cmt from "../../Media/instagram-comment.png";
function PostInfo(props) {
  return (
    <div>
      <button>
        <img src={heart} id="heart" alt=""></img>
      </button>
      <button>
        <img src={cmt} id="cmt" alt=""></img>
      </button>
      <p className="postTime">{props.date}</p>
      <br />
      <p className="postContent">
        <span className="postAuthor">leeminn201</span>
        {props.content}
      </p>
      <input type="text" placeholder="Comment..."></input>
    </div>
  );
}

export default PostInfo;
