import React from 'react';
import "./Post.scss";

import { mapOrder } from 'components/utilities/sorts';
import Picture from 'components/picture/Picture';
import PostInfo from 'components/PostInfo/PostInfo';
function Post(props) {
    const {post} = props
    const picture = mapOrder(post.picture, post.picOrder, 'id')
    return (
        <div class="post">
            <div className="photo">
                {picture.map((picture, index) => <Picture key={index} picture={picture}/>)}
            </div>
            <div className="postInfo">
                <PostInfo date={post.date} content={post.content}/>)
            </div>
            
        </div>
    )
}

export default Post; 