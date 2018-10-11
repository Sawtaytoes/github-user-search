import PropTypes from 'prop-types'
import React from 'react'

import preventDefaultClickBehavior from './preventDefaultClickBehavior'

const propTypes = {
	canPaginate: PropTypes.bool,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired,
}

const InternalLink = ({
	canPaginate,
	children,
	onClick,
}) => (
	<a
		href="#none"
		onClick={
			preventDefaultClickBehavior(
				canPaginate
				&& onClick
			)
		}
		style={{
			color: 'inherit',
			cursor: (
				canPaginate
				? 'pointer'
				: 'context-menu'
			),
			opacity: (
				canPaginate
				? 1
				: 0.5
			),
		}}
	>
		{children}
	</a>
)

InternalLink
.propTypes = propTypes

export default InternalLink
