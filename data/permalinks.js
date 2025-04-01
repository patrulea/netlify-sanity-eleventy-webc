const fetchData = async () => {

	const data = [
		{
			"_id": "home",
			"permalink": "/"
		}
	]

	return Object.fromEntries(data.map(({ _id, permalink }) => [_id, permalink]))

}

export default fetchData
