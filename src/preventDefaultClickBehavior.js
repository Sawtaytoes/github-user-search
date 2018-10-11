const preventDefaultClickBehavior = (
	callback,
) => (
	event,
) => {
	event
	.preventDefault()

	callback
	&& callback()
}

export default preventDefaultClickBehavior
