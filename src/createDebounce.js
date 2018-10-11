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
				callback,
				250,
			)
		)
	}
}

export default createDebounce
