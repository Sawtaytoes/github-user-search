import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import Count from './Count'

const propTypes = {
	data: PropTypes.object,
}

const GitHubUserSearchResults = ({
	data,
}) => (
	<Fragment>
		<div>
			Number of Users Matching Search:
			{' '}
			<Count value={data.search.userCount} />
		</div>

		<pre style={{ textAlign: 'left' }}>
			{JSON.stringify(data, null, 2)}
		</pre>
	</Fragment>
)

GitHubUserSearchResults
.propTypes = propTypes

export default GitHubUserSearchResults
