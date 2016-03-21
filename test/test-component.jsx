import React from 'react'

export class component extends React.Component {
	constructor(props) {
		super(props)
		this.state = {count: props.initialCount}
	}
	render() {
		return (
			<div>
				hello {this.state.count}
			</div>
		)
	}
}
component.defaultProps = { initialCount: 1337 }
