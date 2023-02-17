import actionUpload from "../upload";

const actionUploadFile = (files) =>
	async (dispatch) => {
		const formData = new FormData();
		formData.append('photo', files);
		await dispatch(actionUpload(formData));
	}

export default actionUploadFile;