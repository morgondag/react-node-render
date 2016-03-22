import React from 'react'
class component extends React.Component {
	constructor(props) {
		super(props)
		this.state = {count: props.initialCount}
	}

	handleClick(){
		this.setState({count: this.state.count + 1})
	}
	render() {
		return (
			<div onClick={this.handleClick.bind(this)}>
				hello {this.state.count}
			</div>
		)
	}
}
component.defaultProps = { initialCount: 1337 }
export default component
