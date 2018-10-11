import PropTypes from 'prop-types'
import React from 'react'

import Count from './Count'

const propTypes = {
	avatarUrl: PropTypes.string.isRequired,
	bioHTML: PropTypes.string.isRequired,
	followers: (
		PropTypes
		.shape({
			totalCount: PropTypes.number.isRequired,
		})
	),
	following: (
		PropTypes
		.shape({
			totalCount: PropTypes.number.isRequired,
		})
	),
	starredRepositories: (
		PropTypes
		.shape({
			totalCount: PropTypes.number.isRequired,
		})
	),
	name: PropTypes.string.isRequired,
	websiteUrl: PropTypes.string.isRequired,
}

const User = ({
	avatarUrl,
	bioHTML,
	followers,
	following,
	starredRepositories,
	name,
	websiteUrl,
}) => (
	<div className="User">
		<div>
			<Count
				name="Followers"
				value={followers.totalCount}
			/>
		</div>
		<div>
			<Count
				name="Following"
				value={following.totalCount}
			/>
		</div>
		<div>
			<Count
				name="Starred"
				value={starredRepositories.totalCount}
			/>
		</div>
	</div>
)

User
.propTypes = propTypes

export default User
