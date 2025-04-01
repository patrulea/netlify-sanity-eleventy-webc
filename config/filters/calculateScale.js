// TODO: https://developer.mozilla.org/en-US/docs/Web/CSS/hypot

export default (a = 1, b = 1, percentageValue = false) => {

	if (a <= 0 || b <= 0) {
		throw new Error("Both parameters must be positive integers.")
	}

	const ratio = Math.min(a, b) / Math.max(a, b)
	const hypotenuse = Math.sqrt(1 + ratio * ratio)

	if (!percentageValue) {
		return 1 / hypotenuse
	} else {
		return 100 / hypotenuse + "%"
	}

}
