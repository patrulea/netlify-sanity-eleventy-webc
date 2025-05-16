import { sanityFetch } from "../config/sanity.config.js"

export default async () => await sanityFetch(`
	*[] {
		...
	}
`)
