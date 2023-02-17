import Avatar from "@mui/material/Avatar";
import config from "../../../config";

const AvatarFeedIcon = ({alt, src, className="avatar"}) => {
	return(
		<Avatar className={className}
				alt={alt}
				src={src && (config.backendURL + src)}
		/>
	);
}

export default AvatarFeedIcon;