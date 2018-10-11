import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'

const authLink = (
	setContext((_, { headers }) => ({
		headers: {
			...headers,
			authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
		},
	}))
)

const httpLink = (
	createHttpLink({
		uri: 'https://api.github.com/graphql',
	})
)

const apolloClient = new ApolloClient({
	cache: new InMemoryCache(),
	link: (
		authLink
		.concat(httpLink)
	),
})

export default apolloClient
