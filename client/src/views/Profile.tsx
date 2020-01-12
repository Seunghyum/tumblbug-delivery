import React, { Component } from 'react'

type ProfileProps = {}
type ProfileState = {
  time: Date
}

export default class Profile extends Component<ProfileProps, ProfileState> {
  constructor(props: ProfileProps) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>Profile</h1>
      </div>
    )
  }
}
