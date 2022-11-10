import React from 'react';
import samplePosts from "../../libs/data"
import './index.css';

function Post(props) {
  return <article>{props.samplePosts}</article>;
}

export default Post;
