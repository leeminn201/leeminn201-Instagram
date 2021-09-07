import React from "react";
import "./Picture.scss";
// import postPhoto from "../../Media/LM2.jpg";
function Picture(props) {
    const {picture} = props
    const picsrc = picture.picsrc

  return (<img src={picsrc} className="postPhoto" alt="post"></img>)
}

export default Picture;
