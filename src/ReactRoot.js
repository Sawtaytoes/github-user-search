import apolloClient from './apolloClient'
import App from './App'
import React from 'react'
import { ApolloProvider } from 'react-apollo'

const ReactRoot = () => (
	<ApolloProvider client={apolloClient}>
		<App />
	</ApolloProvider>
)

export default ReactRoot
