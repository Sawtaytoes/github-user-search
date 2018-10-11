import PropTypes from 'prop-types'
import React, { Component, createElement, Fragment } from 'react'

import createDebounce from './createDebounce'

const propTypes = {
	children: PropTypes.func.isRequired,
}

class InputListener extends Component {
	state = { value: '' }

	constructor(props) {
		super(props)

		this
		.debounceInput = createDebounce()
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
