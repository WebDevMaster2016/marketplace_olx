const promiseReducer = (state={}, {type, name, status, payload, error}) =>{
	if (type === 'PROMISE'){
		return {
			...state,
			[name]:{
				status,
				payload: (status === 'PENDING' && state[name]?.payload) ? state[name]?.payload : payload,
				error,
			},
		}
	}
	return state
}

export default promiseReducer;