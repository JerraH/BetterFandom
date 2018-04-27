import React, { Component } from 'react';

class WriteBlogEntry extends Component {
  render() {
    return (
      <div>
        <form className="postForm">
          <div className="inputSurround">
            <label htmlFor="title"></label>
            <input type="text" name="title"/>
          </div>
          <div className="inputSurround">
            <input type="textArea" defaultValue="Write your blog post here!"/></div>
          <div className="inputSurround">
            <label htmlFor=""></label>
            <input type="text"/>
          </div>

          <div className="buttonholder">
            <button className="submit">Submit</button>
            <button className="save">Save</button>
            <button className="cancel">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default WriteBlogEntry;
