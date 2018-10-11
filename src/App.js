import React from 'react'

import './App.css'
import GitHubUser from './GitHubUser'
import InputListener from './InputListener'

const App = () => (
	<div className="App">
		<header className="App-header">
			<InputListener>
				{({ value }) => (
					<GitHubUser
						searchQuery={value}
					/>
				)}
			</InputListener>
		</header>
	</div>
)

export default App
