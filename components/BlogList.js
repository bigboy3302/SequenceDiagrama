// src/components/BlogList.js
import React from 'react';
import BlogPost from './BlogPost'; // Assuming you have a BlogPost component

const BlogList = () => {
  const blogPosts = [
    { id: 1, title: 'Blog Post 1', content: 'Content of the first blog post', date: '2025-03-03' },
    { id: 2, title: 'Blog Post 2', content: 'Content of the second blog post', date: '2025-03-04' }
  ];

  return (
    <div>
      {blogPosts.map((post) => (
        <BlogPost key={post.id} title={post.title} content={post.content} date={post.date} />
      ))}
    </div>
  );
};

export default BlogList;
