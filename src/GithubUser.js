import gql from 'graphql-tag'
import React from 'react'
import { Query } from 'react-apollo'

const FETCH_USER = gql`
	{
		user(login: "Sawtaytoes") {
			name
		}
	}
`

const GithubUser = () => (
	<Query query={FETCH_USER}>
		{({ data, loading }) => (
			loading
			? 'Loading...'
			: JSON.stringify(data)
		)}
	</Query>
)

export default GithubUser
