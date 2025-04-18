import axios from 'axios'

const api = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_BASEURL}`,
	//  baseURL: `https://api.zisindosat.id`,
	// baseURL: `http://localhost:3034`,
})

api.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
		//console.log('error responsesss', JSON.stringify(error.response.data))
		if (error.response.status === 401) {
			//alert(error.response.data.message)
			return (window.location.href = '/auth/login?sessionNull=true')
		}
		// if (error.response.status === 400) {
		// 	//alert(error.response.data.message)
		// 	return (window.location.href = '/auth/login?sessionNull=true')
		// }
		// if (error.response.status === 500) {
		// 	//return alert(error.response.data.message)
		// 	//return (window.location.href = '/auth/login?sessionNull=true')
		// }
		return Promise.reject(error)
	},
)

api.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('token')

		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`
		}

		return config
	},
	(error) => Promise.reject(error),
)

export default api
