export default function () {
    return {
		state: {
			token: localStorage.getItem('access_token') || null,
			filter: 'all',
			todos: [],
		  }
	}
}
