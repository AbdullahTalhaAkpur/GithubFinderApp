import React, { Component } from 'react'

export class Loading extends Component {
  render() {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-success">
              <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
  }
}

export default Loading;