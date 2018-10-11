import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import React from 'react'
import { Query } from 'react-apollo'

const SEARCH_USERS = gql`
	query SearchUsers($searchQuery: String!) {
		search(
			first: 10,
			query: $searchQuery,
			type: USER,
		) {
			edges {
				node {
					... on User {
						name
					}
				}
			}
			pageInfo {
				endCursor
				hasNextPage
				hasPreviousPage
				startCursor
			}
			userCount
		}
	}
`

const propTypes = {
	searchQuery: PropTypes.string,
}

const GitHubUserSearch = ({
	searchQuery,
}) => (
	searchQuery
	? (
		<Query
			query={SEARCH_USERS}
			variables={{ searchQuery }}
		>
			{({ data, loading }) => (
				loading
				? 'Loading...'
				: JSON.stringify(data, null, 2)
			)}
		</Query>
	)
	: null
)

GitHubUserSearch
.propTypes = propTypes

export default GitHubUserSearch
