import {useState, useEffect} from 'react'
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

const SignIn = ({ props }) => {
  const [password, SetPassword] = useState(false)
	const [email, setEmail] = useState(false)
	const [enter, setEnter] = useState(false)

  useEffect(() => {
    if (password || email || !enter) {
			return 
		}
    console.log(enter)
    window.location = '/success'

  },[enter])

	const handleSubmit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)

    if (!data.get('password')) {
			SetPassword(true)
		} else SetPassword(false)
		if (!data.get('email')) {
			setEmail(true)
		} else setEmail(false)
	
		setEnter({
			email: data.get('email'),
			password: data.get('password'),
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
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
            error={email}
            helperText={email ? 'Required Field' : ''}
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
						/>
						<TextField
            error={password}
            helperText={password ? 'Required Field' : ''}
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							{props.button}
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="/forgot-password" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href="/signup" variant="body2">
									{"Don't have an account? Sign Up"}
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

export default SignIn
