import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import Count from './Count'
import InternalLink from './InternalLink'
import Paginator from './Paginator'
import User from './User'

const paginate = ({
	fetchMore,
	variables,
}) => () => (
	fetchMore({
		updateQuery: (
			previousResult,
			{ fetchMoreResult },
		) => (
			fetchMoreResult
			? {
				search: ({
					...(
						fetchMoreResult
						.search
					),
					pageInfo: {
						...(
							fetchMoreResult
							.search
							.pageInfo
						),
						startCursor: (
							previousResult
							.search
							.pageInfo
							.startCursor
						),
					},
				}),
			}
			: previousResult
		),
		variables,
	})
)

const propTypes = {
	data: (
		PropTypes
		.shape({
			search: PropTypes.object.isRequired,
		})
		.isRequired
	),
	fetchMore: PropTypes.func.isRequired,
}

const GitHubUserSearchResults = ({
	data,
	fetchMore,
}) => (
	<Fragment>
		<Count
			name="Number of Users Matching Search"
			value={data.search.userCount}
		/>

		<Paginator>
			<InternalLink
				canPaginate={
					data
					.search
					.pageInfo
					.hasPreviousPage
				}
				onClick={
					paginate({
						fetchMore,
						variables: {
							before: (
								data
								.search
								.pageInfo
								.startCursor
							),
						},
					})
				}
			>
				Prev
			</InternalLink>

			<InternalLink
				canPaginate={
					data
					.search
					.pageInfo
					.hasNextPage
				}
				onClick={
					paginate({
						fetchMore,
						variables: {
							after: (
								data
								.search
								.pageInfo
								.endCursor
							),
						},
					})
				}
			>
				Next
			</InternalLink>
		</Paginator>

		<div
			style={{
				display: 'grid',
				gridColumnGap: '20px',
				gridRowGap: '70px',
				gridTemplateColumns: '1fr 1fr',
				marginBottom: '40px',
				padding: '20px',
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
					...props
				}) => (
					<div
						key={databaseId}
						style={{
							color: 'inherit',
							height: '100%',
							textDecoration: 'none',
							width: '100%',
						}}
					>
						<User {...props} />
					</div>
				))
			}
		</div>
	</Fragment>
)

GitHubUserSearchResults
.propTypes = propTypes

export default GitHubUserSearchResults
