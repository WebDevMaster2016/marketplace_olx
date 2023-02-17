import config from "../../../config";

const getGQL = url =>
	(query, variables= {}) =>
		fetch(url, {
			method: 'POST',
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

const anonGql = getGQL(`${config.backendURL}graphql`);

export default anonGql;