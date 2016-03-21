import React from 'react'

export class component extends React.Component {
	constructor(props) {
		super(props)
		this.state = {count: props.initialCount}
	}

	tick() {
		this.setState({count: this.state.count + 1})
	}

	componentDidMount(){
		console.log('hello worlds!')
	}

	componentWillUnmount() {
		console.log('bye!')
	}
	render() {
		return (
			<div onClick={this.tick.bind(this)}>
				Clicks: {this.state.count}
			</div>
		)
	}
}

component.propTypes = { initialCount: React.PropTypes.number}
component.defaultProps = { initialCount: 1337 }
