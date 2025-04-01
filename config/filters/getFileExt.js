export default (pathname, upcase = false) => {
	const parts = pathname.split(".")
	const extension = parts[parts.length - 1]
	return upcase ? extension.toUpperCase() : extension.toLowerCase()
}
