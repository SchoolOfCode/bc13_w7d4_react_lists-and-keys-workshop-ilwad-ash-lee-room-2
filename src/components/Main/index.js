import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  return (
  <main id= "main" >
    {posts.map((postObject) => {
      return( <Post key={postObject.id} title={postObject.title} date={postObject.date} author={postObject.author} text ={postObject.text} highlights ={postObject.highlights} image = {postObject.image} />
      )
    })}
  </main>
)
  }
export default Main;
