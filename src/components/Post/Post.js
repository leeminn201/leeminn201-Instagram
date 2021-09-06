import React from 'react';
import "./Post.scss";
import postPhoto from "../../Media/LM2.jpg";
import heart from "../../Media/heart2.png";
import cmt from "../../Media/instagram-comment.png"
function Post() {
    return (
        <div class="post">
            <img src={postPhoto} className="postPhoto" alt="post"></img>
            <div className="postInfo">
                <button><img src={heart} id="heart" alt=""></img></button>
                <button><img src={cmt} id="cmt" alt=""></img></button>
                <p className="postTime">"05/09/2021"</p><br/>
                <p className="postContent"><span className="postAuthor">leeminn201</span> This is my first post.</p>
                <input type="text" placeholder="Comment..."></input>
            </div>
        </div>
    )
}

export default Post; 