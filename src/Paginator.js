import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
	children: (
		PropTypes
		.oneOfType([
			(
				PropTypes
				.arrayOf(
					PropTypes
					.node
					.isRequired
				)
				.isRequired
			),
			(
				PropTypes
				.node
				.isRequired
			),
		])
	),
}

const Paginator = ({
	children,
}) => (
	<div
		style={{
			border: '2px solid grey',
			display: 'flex',
			justifyContent: 'space-between',
			marginBottom: '30px',
			padding: '20px',
			width: '200px',
		}}
	>
		{
			(
				Array
				.isArray(children)
				? children
				: [children]
			)
			.map((child, index) => (
				<div
					className="ItemsList_item"
					key={index}
				>
					{child}
				</div>
			))
		}
	</div>
)

Paginator
.propTypes = propTypes

export default Paginator
