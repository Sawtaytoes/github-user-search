import PropTypes from 'prop-types'
import React, { Component, createElement, Fragment } from 'react'

const propTypes = {
	children: PropTypes.func.isRequired,
}

class InputListener extends Component {
	state = { value: '' }

	debounceInput = (
		callback,
	) => {
		clearTimeout(
			this
			.timeoutId
		)

		this
		.timeoutId = (
			setTimeout(
				() => {
					console.log('timeoutId 1', this.timeoutId)
					callback()
				},
				2000,
			)
		)

		console.log('timeoutId 2', this.timeoutId)
	}

	updateValue = ({
		target,
	}) => (
		this
		.debounceInput(() => {
			this.setState(() => ({
				value: (
					target
					.value
				),
			}))
		})
	)

	render() {
		const { children } = this.props
		const { value } = this.state

		return (
			<Fragment>
				<input
					onChange={this.updateValue}
					type="text"
					value={value}
				/>

				{
					createElement(
						children,
						{ value },
					)
				}
			</Fragment>
		)
	}
}

InputListener
.propTypes = propTypes

export default InputListener
