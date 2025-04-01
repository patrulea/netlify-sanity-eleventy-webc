export default {
	layout: "base",
	permalink: "404.html",
	title: data => data.error404.title,
	description: data => data.error404.description,
	image: data => data.error404.image
}
