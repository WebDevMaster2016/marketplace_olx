import Avatar from "@mui/material/Avatar";
import {useSelector} from "react-redux";
import config from "../../../config";

const AvatarIcon = ({alt, src, className="avatar"}) => {
	return(
		<Avatar className={className}
				alt={alt}
				src={src}
		/>
	);
}

const AvatarIconRedux = ({className}) => {
	const alt = useSelector(state => state?.promise?.me?.payload?.nick);
	const src = useSelector(state => state?.promise?.me?.payload?.avatar?.url);
	return(
		<AvatarIcon className={className}
		            alt={alt}
		            src={src && (config.backendURL + src)}
		/>
	);
}

export default AvatarIconRedux;