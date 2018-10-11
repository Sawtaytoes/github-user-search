import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import React from 'react'
import { Query } from 'react-apollo'

const FETCH_USER = gql`
	query UserSearch($searchQuery: String!) {
		search(query: $searchQuery, first: 10, type: USER) {
			edges {
				node {
					... on User {
						name
					}
				}
			}
			pageInfo {
				endCursor
				startCursor
				hasNextPage
				hasPreviousPage
			}
			userCount
		}
	}
`

const propTypes = {
	searchQuery: PropTypes.string,
}

const GitHubUser = ({ searchQuery }) => (
	searchQuery
	? (
		<Query
			query={FETCH_USER}
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

GitHubUser
.propTypes = propTypes

export default GitHubUser
