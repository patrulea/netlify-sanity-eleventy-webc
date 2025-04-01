export default {
	date: new Date().toUTCString(),
	subdomain: "",
	netlifySubdomain: process.env.SITE_NAME,
	url: process.env.URL || "http://localhost:1111",
	environment: process.env.NODE_ENV
}
