import React from 'react';

function Slide({ title, content }) {
  return (
    <article>
      <header>
        <h1>{title}</h1>
      </header>
      <section>
        <p>{content}</p>
      </section>
    </article>
  );
}

export default Slide;
