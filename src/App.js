import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Success from './components/Success'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import logo from './images/logo.png'

function App() {
	const signInProps = {
		title: 'Sign In',
		button: 'Sign In',
		logo: logo
	}

	const signUpProps = {
    title: 'Sign Up',
    button: 'Sign Up',
    logo: logo,
    checkboxText: "I want to receive inspiration, marketing promotions and updates via email.",
  }

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<SignIn props={signInProps} />} />
					<Route path="/signup" element={<SignUp props={signUpProps} />} />
          <Route path='/success' element={<Success/>}/>
				</Routes>
			</Router>
		</div>
	)
}

export default App
