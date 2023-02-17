import config from "../../../config";

const checkAuthToken = () => {
	const headers = {
		"Content-Type": "application/json",
		"Accept": "application/json",
	}
	if(localStorage.getItem('authToken')) {
		return {
			...headers,
			"Authorization": `Bearer ${localStorage.getItem('authToken')}`
		}
	} else {
		return headers;
	}
}

const getGQL = url =>
	(query, variables= {}) =>
		fetch(url, {
			method: 'POST',
			headers: checkAuthToken(),
			body:JSON.stringify({query, variables})
		}).then(res => res.json())
			.then(data => {
				try {
					if(!data.data && data.errors) {
						throw new SyntaxError(`SyntaxError - ${JSON.stringify(Object.values(data.errors)[0])}`);
					}
					return Object.values(data.data)[0];
				} catch (e) {
					console.error(e);
				}
			});

const gql = getGQL(`${config.backendURL}graphql`);

export default gql;