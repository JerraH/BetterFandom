import React from 'react';
import {connect} from 'react-redux';

const UserProfile = () => (
  <div className="container">

  </div>
);

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  userProfile: state.userProfile
})

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)

