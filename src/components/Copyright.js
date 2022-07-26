import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{'Copyright © '}
			<Link color="inherit" href={props.websiteLink}>
				{props.websiteName}
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}
