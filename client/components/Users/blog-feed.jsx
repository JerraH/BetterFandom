import React, { Component } from 'react';
import BlogEntry from './blog-entry.jsx';
import {connect} from 'react-redux';
import {getBlogFeed} from '../../store/feed'

class BlogFeed extends Component {

  componentDidMount() {
    this.props.getBlockFeedBound(this.props.user)
  }

  render() {
    console.log(this.props.blogFeed)
    return (
      <div className="container">
        { this.props.blogFeed.map(post => {
          return (
            <BlogEntry key={post.id} post={post} />
          )

        })
        }

      </div>
    );
  }
}


const mapStateToProps = state => ({
  blogFeed: state.feed,
  user: state.user
})
const mapDispatchToProps = dispatch => {
  return {
    getBlogFeedBound(userId) {
      dispatch(getBlogFeed(userId))
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogFeed);
