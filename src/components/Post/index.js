import React from "react";
import samplePosts from "../../libs/data";
import "./index.css";

function Post({ title, date, author, text, highlights, image }) {
  return (
    <article>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{date}</p>
      <p>{text}</p>
      {highlights.map((highlight) => {
        return <li key={highlights.indexOf(highlight)}>{highlight}</li>;
      })}
      <img src={image.link} alt={image.alt}></img>
    </article>
  );
}

export default Post;
