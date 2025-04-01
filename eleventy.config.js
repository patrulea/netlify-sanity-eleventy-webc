import pluginWebc from "@11ty/eleventy-plugin-webc"
import filters from "./config/filters/index.js"
import postcssConfig from "./config/postcss.config.js"

export default async eleventyConfig => {

	// WEBC
	eleventyConfig.addPlugin(pluginWebc, {
		components: "components/**/*.webc",
		bundlePluginOptions: {
			toFileDirectory: "assets",
			transforms: [
				async function(content) {
					if (this.type === "css") {
						const response = await postcssConfig.process(content, {
							from: this.page.inputPath,
							to: null
						})
						return response.css
					}
					return content
				}
			]
		}
	})

	// FILTERS
	Object.keys(filters).forEach(filter => {
		eleventyConfig.addFilter(filter, filters[filter])
	})
	eleventyConfig.addGlobalData("filters", filters)

	// PASSTHROUGHS
	eleventyConfig.addPassthroughCopy("assets")
	eleventyConfig.addPassthroughCopy({
		"node_modules/the-new-css-reset/css/*": "assets/the-new-css-reset"
	})

	// SERVER
	eleventyConfig.addWatchTarget("./config/**/*.pcss")
	eleventyConfig.setServerOptions({
		showAllHosts: true
	})

	// SETTINGS
	eleventyConfig.setDataFileSuffixes([
		".data"
	])
	eleventyConfig.setDataDirectory("data")
	eleventyConfig.setLayoutsDirectory("layouts")

}
