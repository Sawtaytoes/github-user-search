import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
	value: PropTypes.string,
}

const Count = ({
	value,
}) => (
	<div className="Count">
		{value}
	</div>
)

Count
.propTypes = propTypes

export default Count
