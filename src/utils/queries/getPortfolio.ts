import { client } from "../sanity"

export const getPortfolio = () => {
	return client.fetch('*[_type == "portfolio"]')
}
