import React, { Component } from 'react'

type NotificationProps = {}
type NotificationState = {
  time: Date
}

export default class Notification extends Component<NotificationProps, NotificationState> {
  constructor(props: NotificationProps) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>Notification</h1>
      </div>
    )
  }
}
