import React from 'react'

export default React.createClass({
  render() {
    return (
      <article className="tweet">
        <h2>{ this.props.text }</h2>
        <time>{ this.props.time }</time>
        <p onClick={this.props.onDeleteClick} data-id={this.props.id}>X</p>
      </article>
    )
  }
})
