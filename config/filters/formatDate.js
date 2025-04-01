import { DateTime } from "luxon"

export default (date = new Date(), format = "yyyy-MM-dd") => {
	date = new Date(date)
	const luxonDate = DateTime.fromJSDate(date, {
		zone: "utc"
	})
	return luxonDate.toFormat(format)
}
