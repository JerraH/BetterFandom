import React, { Component } from 'react';

export default class About extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    let userProfile = this.props.userProfile.userProfile
    console.log(this.props.userProfile.userProfile.about)
    return (
      <div>
        <div className="card">
        <div className="card-body">
            <h3>About</h3>
          {userProfile.about}
        </div>
        </div>
        <div className="card card-body">
          Pronouns: {userProfile.pronouns}
        </div>
        <div className="card card-body">
        names
        </div>
      </div>
    )
  }
}
