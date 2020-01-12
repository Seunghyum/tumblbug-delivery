import React, { Component } from 'react'

type PaymethodProps = {}
type PaymethodState = {
  time: Date
}

export default class Paymethod extends Component<PaymethodProps, PaymethodState> {
  constructor(props: PaymethodProps) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>Paymethod</h1>
      </div>
    )
  }
}
