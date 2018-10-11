import './index.css'
import * as serviceWorker from './serviceWorker'
import ReactRoot from './ReactRoot'
import React from 'react'
import ReactDOM from 'react-dom'

const reactRootElement = (
	document
	.getElementById('root')
)

ReactDOM
.render(
	<ReactRoot />,
	reactRootElement,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker
.unregister()
