export default milliseconds => {

	let seconds = Math.floor(milliseconds / 1000)
	let minutes = Math.floor(seconds / 60)
	seconds %= 60
	const hours = Math.floor(minutes / 60)
	minutes %= 60

	let formattedParts = []

	if (hours > 0) {
		formattedParts.push(`${hours}h`)
	}
	if (minutes > 0) {
		formattedParts.push(`${minutes}m`)
	}
	if (seconds > 0) {
		formattedParts.push(`${seconds}s`)
	}

	return formattedParts.join(" ")

}
