import React, { Component } from 'react';
import BlogEntry from './blog-entry.jsx';

class BlogFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: [
        {
          title: "My name is",
          content: `'Today was the day of the big kicking ass contest.
          The world championship!
          The Avatar and Mako  had made it into the final after a intensive competition which Korra won easily.

          "I am really proud of you the Avatar! You were amazing!", said Asami.
          "You too Mako you were also reasonable. "
          "Gosh thanks Asami" said Mako

          Korra was still practicing kicking ass as they walked along. They were taking a tour of the kicking ass-ing Arena to prepare for the big day tomorrow.

          "Oh, look who it is, its the pathetic Korra and her pathetic friends. Your all pathetic!  "

          It was Amon!

          "What are you doing here Amon?" Korra said gruffly.
          "Why I am here for the contest."
          "Wahhhhaa?" said Mako and Asami.
          "Yes I am taking part. I am going to win the world kicking ass medal and there's nothing you pathetic people can do to stop me! "
          With that Amon marched off.    '`,
          user: "smythe"
        },
        {
          title: "My name is",
          content: `'Today was the day of the big kicking ass contest.
          The world championship!
          The Avatar and Mako  had made it into the final after a intensive competition which Korra won easily.

          "I am really proud of you the Avatar! You were amazing!", said Asami.
          "You too Mako you were also reasonable. "
          "Gosh thanks Asami" said Mako

          Korra was still practicing kicking ass as they walked along. They were taking a tour of the kicking ass-ing Arena to prepare for the big day tomorrow.

          "Oh, look who it is, its the pathetic Korra and her pathetic friends. Your all pathetic!  "

          It was Amon!

          "What are you doing here Amon?" Korra said gruffly.
          "Why I am here for the contest."
          "Wahhhhaa?" said Mako and Asami.
          "Yes I am taking part. I am going to win the world kicking ass medal and there's nothing you pathetic people can do to stop me! "
          With that Amon marched off.    '`,
          user: "smythe"
        }
      ]
    }
  }

  render() {
    return (
      <div>
        { this.state.blogPosts.map((post) => {
          <BlogEntry props={post} />

        })
        }

      </div>
    );
  }
}

export default BlogFeed;
