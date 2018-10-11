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
		.isRequired
	),
	following: (
		PropTypes
		.shape({
			totalCount: PropTypes.number.isRequired,
		})
		.isRequired
	),
	login: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	starredRepositories: (
		PropTypes
		.shape({
			totalCount: PropTypes.number.isRequired,
		})
		.isRequired
	),
	websiteUrl: PropTypes.string.isRequired,
}

const User = ({
	avatarUrl,
	bioHTML,
	followers,
	following,
	login,
	name,
	starredRepositories,
	websiteUrl,
}) => (
	<div
		style={{
			border: '2px solid grey',
			marginBottom: '30px',
			padding: '20px',
		}}
	>
		<div>
			<div
				style={{
					fontWeight: 'bold',
					marginBottom: '10px',
				}}
			>
				{login}
			</div>

			<small>
				{name}
			</small>
		</div>

		<div>
			<a href={websiteUrl}>
				Go to Website
			</a>
		</div>

		<div>
			<Count
				name="Followers"
				value={followers.totalCount}
			/>
			<Count
				name="Following"
				value={following.totalCount}
			/>
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
