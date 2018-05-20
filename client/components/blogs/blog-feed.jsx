import React, { Component } from 'react';
import BlogEntry from './blog-entry.jsx';
import {connect} from 'react-redux';
import {getBlockFeed} from '../../store/feed'

class BlogFeed extends Component {
  constructor(props) {
    super(props);
    }


  componentDidMount() {
    this.props.getBlockFeedBound(this.props.user)
  }

  render() {
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
    getBlockFeedBound(userId) {
      dispatch(getBlockFeed(userId))
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogFeed);
