import axios from "axios";

export const handleFetch = async (query:string) => {
	const url = `https://httpbin.org/#/HTTP_Methods${query}`

	try {
		const response = await axios(url);
		return response
	}catch (err) {
		//@ts-ignore
		return {error: err.message}
	}
}