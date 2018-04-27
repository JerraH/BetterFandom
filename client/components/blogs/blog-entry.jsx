import React, { Component } from 'react';

class BlogEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
  }

  render() {
    return (
      <div className="post">
        <div className="title">
          <h3></h3>
        </div>
        <div className="postText"></div>
        <ul>
          <li>Like</li>
          <li>Share</li>
          <li>Comment</li>
        </ul>
      </div>
    );
  }
}

export default BlogEntry;
