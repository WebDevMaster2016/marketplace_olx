import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Copyright = () => {
	return (
		<Typography variant="body2"
		            color="text.secondary"
		>
			{'Copyright © '}
			<Link color="inherit"
			      href="/"
			>HOLX</Link>{' '}{new Date().getFullYear()}{'.'}
		</Typography>
	);
}

export default Copyright;