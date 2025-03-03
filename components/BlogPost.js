import React from 'react';

const BlogPost = ({ title, content, date }) => {
  return (
    <article>
      <header>
        <h2>{title}</h2>
        <time>{date}</time>
      </header>
      <p>{content}</p>
    </article>
  );
};

export default BlogPost;
