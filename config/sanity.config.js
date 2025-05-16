import { createClient } from "picosanity"

const client = new createClient({
	projectId: process.env.SANITY_STUDIO_PROJECT_ID,
	dataset: process.env.SANITY_STUDIO_DATASET,
	apiVersion: process.env.SANITY_STUDIO_API_VERSION,
	token: process.env.SANITY_STUDIO_API_TOKEN,
	useCdn: !process.env.SANITY_STUDIO_API_TOKEN
})

const sanityFetch = async (query, params = {}) => {
	try {
		return await client.fetch(query, params)
	} catch (error) {
		console.error("Sanity fetch error:", error.message)
		return []
	}
}

export { sanityFetch }
