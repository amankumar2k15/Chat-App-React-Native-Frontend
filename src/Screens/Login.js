import Auth from "../Components/Auth"

const Login = () => {
    return (
        <Auth forgetPassword={true} headingText="Log In" login={true} buttonText="Sign Up" bottomText="Sign up here" />
    )
}

export default Login
