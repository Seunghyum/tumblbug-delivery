import React, { Component } from 'react'

type AccountProps = {}
type AccountState = {
  time: Date
}

export default class Account extends Component<AccountProps, AccountState> {
  constructor(props: AccountProps) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>Account</h1>
      </div>
    )
  }
}
