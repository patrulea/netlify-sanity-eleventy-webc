export default {
	layout: "global",
	permalink: "index.html",
	title: data => data.home.title,
	description: data => data.home.description,
	image: data => data.home.image,
	sitemap: 10
}
