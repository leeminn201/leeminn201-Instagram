import React, {useEffect, useState} from 'react';
import {isEmpty} from 'lodash';

import "./Album.scss";
import Post from 'components/Post/Post';
import { mapOrder } from 'components/utilities/sorts';
import {initialData} from '../actions/initialData';
function Album() {
    const [album, setAlbum] = useState({})
    const [post, setPost] = useState([])

    useEffect(() => {
        const albumfromDB = initialData.album.find(album => album.id === '1')

        if (albumfromDB) {
            setAlbum(albumfromDB)

            setPost(mapOrder(albumfromDB.post, albumfromDB.postOrder, 'id'))
        }
    }, [])
        
        if (isEmpty(album)) {
            return <div className="notfound">Not found Posts!</div> 
        }

    return (
        <div className="album">
            {post.map((post, index) => <Post key={index} post = {post}/>)}
            {/* <Post />
            <Post />
            <Post /> */}

        </div>
    )
}

export default Album; 
