import React from 'react'

import './App.css'
import GitHubUserSearch from './GitHubUserSearch'
import InputListener from './InputListener'

const App = () => (
	<div className="App">
		<header className="App-header">
			<InputListener>
				{({ value }) => (
					<GitHubUserSearch
						searchQuery={value}
					/>
				)}
			</InputListener>
		</header>
	</div>
)

export default App
