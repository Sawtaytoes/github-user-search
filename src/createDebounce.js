const createDebounce = () => {
	let timeoutId

	return (
		callback,
	) => {
		clearTimeout(
			timeoutId
		)

		timeoutId = (
			setTimeout(
				() => {
					console.log('timeoutId 1', timeoutId)
					callback()
				},
				250,
			)
		)

		console.log('timeoutId 2', timeoutId)
	}
}

export default createDebounce
