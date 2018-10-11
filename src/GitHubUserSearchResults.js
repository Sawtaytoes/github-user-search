import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import Count from './Count'
import User from './User'

const propTypes = {
	data: (
		PropTypes
		.shape({
			search: PropTypes.object.isRequired,
		})
		.isRequired
	),
}

const GitHubUserSearchResults = ({
	data,
}) => (
	<Fragment>
		<Count
			name="Number of Users Matching Search"
			value={data.search.userCount}
		/>

		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
			}}
		>
			{
				data
				.search
				.edges
				.map(({ node }) => (
					node
				))
				.map(({
					databaseId,
					url,
					...props
				}) => (
					<a
						key={databaseId}
						href={url}
						style={{
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						<User {...props} />
					</a>
				))
			}
		</div>
	</Fragment>
)

GitHubUserSearchResults
.propTypes = propTypes

export default GitHubUserSearchResults
