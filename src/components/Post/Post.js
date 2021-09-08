import React from 'react';
import "./Post.scss";

import { mapOrder } from 'components/utilities/sorts';
// import Picture from 'components/Picture/Picture';
import PostInfo from 'components/PostInfo/PostInfo';
import Slider from 'components/Slider/Slider';
function Post(props) {
    const {post} = props
    const picture = mapOrder(post.picture, post.picOrder, 'id')

    return (
        <div className="post">
            {/* <div className="photo">
                {picture.map((picture, index) => <Picture key={index} picture={picture}/>)}
            </div> */}
            {/* {picture.map((picture, index) => <Slider key={index} picture={picture}/>)} */}
            <Slider post={post}/>
            <div className="postInfo">
                <PostInfo date={post.date} content={post.content}/>
            </div>  
        </div>)
    
}

export default Post; 