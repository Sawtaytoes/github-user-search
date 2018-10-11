import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
	name: PropTypes.string,
	value: PropTypes.number,
}

const Count = ({
	name,
	value,
}) => (
	<div className="Count">
		{name}: {value}
	</div>
)

Count
.propTypes = propTypes

export default Count
