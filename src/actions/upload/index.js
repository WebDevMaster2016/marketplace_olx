import actionPromise from "../promise";
import config from "../../config";

const actionUpload = formData =>
	actionPromise('upload',
		fetch(`${config.backendURL}upload`, {
			method: "POST",
			headers: localStorage.authToken ? {Authorization: 'Bearer ' + localStorage.authToken} : {},
			body: formData
		}).then(res => res.json())
	);

export default actionUpload;