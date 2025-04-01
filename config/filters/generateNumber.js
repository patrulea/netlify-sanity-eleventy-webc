export default (min = 0, max = 100, decimals = 0) => {
	return parseFloat((Math.random() * (max - min) + min).toFixed(decimals))
}
