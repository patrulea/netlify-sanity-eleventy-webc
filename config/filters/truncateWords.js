export default (string, count) => {
	const words = string.split(" ")
	const truncatedWords = words.slice(0, count).join(" ")
	return words.length > count ? truncatedWords + "…" : truncatedWords
}
