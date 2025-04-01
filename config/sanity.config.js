export default async query => {
	try {
		const response = await fetch(`https://${process.env.SANITY_STUDIO_PROJECT_ID}.api.sanity.io/v${process.env.SANITY_STUDIO_API_VERSION}/data/query/${process.env.SANITY_STUDIO_DATASET}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${process.env.SANITY_STUDIO_API_TOKEN}`
			},
			body: JSON.stringify({
				query
			})
		})
		if (!response.ok) {
			throw new Error(`${error.message}: ${response.statusText}`)
		}
		const data = await response.json()
		return data.result
	} catch (error) {
		console.error(error.message)
		return null
	}
}
