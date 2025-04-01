import ImageUrlBuilder from "@sanity/image-url"

const imageUrl = imageRef => ImageUrlBuilder({
	projectId: process.env.SANITY_STUDIO_PROJECT_ID,
	dataset: process.env.SANITY_STUDIO_DATASET,
	apiVersion: process.env.SANITY_STUDIO_API_VERSION,
	token: process.env.SANITY_STUDIO_API_TOKEN,
	useCdn: true
}).image(imageRef).url()

export default imageRef => imageUrl(imageRef)
