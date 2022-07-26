import { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { ThemeProvider } from '@mui/material/styles'

import theme from '../theme'

export default function SignUp({ props }) {
	const [passwordConfirm, SetPasswordConfirm] = useState(false)
	const [firstName, setFirstName] = useState(false)
	const [lastName, setLastName] = useState(false)
	const [email, setEmail] = useState(false)
	const [enter, setEnter] = useState(false)

	useEffect(() => {
    if (passwordConfirm || email || firstName || lastName || !enter) {
			return 
		}
    console.log(enter)
    window.location = '/success'

  },[enter])

	const handleSubmit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		if (data.get('confirm password') !== data.get('password') || !data.get('password')) {
			SetPasswordConfirm(true)
		} else SetPasswordConfirm(false)
		if (!data.get('email')) {
			setEmail(true)
		} else setEmail(false)
		if (!data.get('firstName')) {
			setFirstName(true)
		} else setFirstName(false)
		if (!data.get('lastName')) {
			setLastName(true)
		} else setLastName(false)

		setEnter({
			firstName: data.get('firstName'),
			lastName: data.get('lastName'),
			email: data.get('email'),
			password: data.get('password'),
      checkbox: data.get('checkbox')
		})
	}


	const logoPick = () => {
		return props.logo ? (
			<Box
				component="img"
				sx={{
					height: 144,
					maxHeight: { xs: 111, md: 144 },
					marginBottom: 2,
				}}
				alt="logo"
				src={props.logo}
			/>
		) : (
			<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
				<LockOutlinedIcon />
			</Avatar>
		)
	}

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					{logoPick()}
					<Typography component="h1" variant="h5">
						{props.title}
					</Typography>
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									error={firstName}
									helperText={firstName ? 'Required Field' : ''}
									autoComplete="given-name"
									name="firstName"
									required
									fullWidth
									id="firstName"
									label="First Name"
									autoFocus
									variant="outlined"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									error={lastName}
									helperText={lastName ? 'Required Field' : ''}
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									autoComplete="family-name"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									error={email}
									helperText={email ? 'Required Field' : ''}
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									error={passwordConfirm}
									helperText={passwordConfirm ? 'Ensure passwords match' : ''}
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="new-password"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									error={passwordConfirm}
									helperText={passwordConfirm ? 'Ensure passwords match' : ''}
									required
									fullWidth
									name="confirm password"
									label="Confirm Password"
									type="password"
									id="confirm-password"
									autoComplete="confirm-password"
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControlLabel
									control={
										<Checkbox name="checkbox" value="allowExtraEmails" color="primary" />
									}
									label={props.checkboxText}
								/>
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign Up
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid item>
								<Link href="/" variant="body2">
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				{props.copyright}
			</Container>
		</ThemeProvider>
	)
}
